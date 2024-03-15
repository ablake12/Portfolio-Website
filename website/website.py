from flask import Flask, request, render_template#import flask libraries


app = Flask(__name__)#create Flask object


@app.route('/')#make this function run on the original route
def homeFunct():
    return render_template('home.html')#render html form

@app.route('/about')#make this function run on the original route
def aboutFunct():
    return render_template('about.html')#render html form

@app.route('/resume')#make this function run on the original route
def resumeFunct():
    return render_template('resume.html')#render html form

@app.route('/projects')#make this function run on the original route
def projectFunct():
    return render_template('projects.html')#render html form

@app.route('/contact')#make this function run on the original route
def contactFunct():
    return render_template('contact.html')#render html form

@app.route('/urls')#make this function run on the original route
def linkFunct():
    return render_template('links.html')#render html form


if __name__ == '__main__':
    app.run(debug=True)