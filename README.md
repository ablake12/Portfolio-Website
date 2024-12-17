# Personal-Website

## To run locally:
1. Open the terminal
2. Export Mail Username/email either in terminal or in a .env file
- export EMAIL_USERNAME=<username>
3. Export Mail Password for Flask specifically. To generate this password, go to https://myaccount.google.com/u/1/apppasswords
- export EMAIL_FLASK_PASSWORD=<generatedPassword>
4. Run the requirements.txt
```bash
pip3 install -r requirements.txt
```
5. Run locally:
- ```flask run```
 To debug:
- ```python3 app.py```
For other users:
- ```flask run --host=0.0.0.0```
6. Go to the given port and enjoy!