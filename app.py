import os
from dotenv import load_dotenv
from flask import Flask, render_template, request, send_file # import flask libraries
from flask_mail import Mail, Message # import flask library for email

load_dotenv()

app = Flask(__name__)# create Flask object
mail = Mail(app) # initialize mail class
   
# Mail configuration
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = os.getenv('EMAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('EMAIL_FLASK_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('EMAIL_USERNAME')
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
mail = Mail(app)

@app.route('/')# make this function run on the original route
def home():
    return render_template('home.html')#render html form

@app.route('/about')#make this function run on the original route
def about():
    return render_template('about.html')#render html form

@app.route('/resume')#make this function run on the original route
def resume():
    return render_template('resume.html')#render html form

@app.route('/resume.pdf') #html route for downloading resume
def resume_download():
    return send_file('static/resume.pdf', mimetype='application/pdf', attachment_filename='Alanza_Blake_resume.pdf', as_attachment=True)

@app.route('/portfolio')#make this function run on the original route
def project():
    return render_template('projects.html')#render html form

@app.route("/jams")#make this function run on the original route
def music():
    return render_template('music.html')

@app.route('/contact')#make this function run on the original route
def contact():
    return render_template('contact.html')#render html form

@app.route('/contact', methods = ['POST'])# html template for after submitting the form
def submitted():
    try:
        # retrieve answers from html form
        name = request.form.get("name")
        email = request.form.get("email")
        subject = request.form.get("subject")
        message = request.form.get("message")

        if subject == "" or subject is None:
            # subject = "Incoming Message From Website - No Subject"
            subject = "No Subject"
        # else:
        #     subject = f"Incoming Message From Website - {subject}"

        # set recipient as self, reply to set to the actual recipient
        msg = Message(subject, recipients=[os.getenv('EMAIL_USERNAME')], reply_to=email)
        msg.body = f"Name: {name}\n\nEmail: {email}\n\nMessage:\n{message}"
        mail.send(msg)

        return render_template('submitted.html', return_message = "Your message was submitted successfully!")
    except Exception as error:
        print(f"Error: {error}")
        return render_template('submitted.html', return_message = "Your message failed to submit due to an internal error. While I work to fix this issue, please reach out via email directly by clicking on the mail icon on the left side of this page. Thank you and I apologize for the inconvenience.")

if __name__ == '__main__':
    app.run(debug=True) # set to false in final commit