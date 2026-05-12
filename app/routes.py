from flask import render_template, flash, redirect, url_for, request
from app import app,mail
from app.forms import LoginForm
from flask_login import current_user, login_user , logout_user, login_required
from app.models import User
from config import Config
from flask_mail import Mail, Message

@app.route('/')
@app.route('/index')
def index():
    return render_template("index.html")


@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('main'))
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user is None or not user.check_password(form.password.data):
            flash('Invalid username or password')
            print("Invalid username or password")
            return redirect(url_for('login'))
        login_user(user)
        return redirect(url_for('loading')) # Redirect to cinematic loading screen
    return render_template("login.html",form=form)

@app.route('/loading')
@login_required
def loading():
    return render_template("loading.html")

@app.route('/main')
@login_required
def main():
    return render_template("main.html")


@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('index'))

@app.route('/sendMail')
@login_required
def sendMail():
    try:
        # Check if mail is configured
        if not Config.MAIL_USERNAME or not Config.MAIL_PASSWORD or not Config.MAIL_RECEIVER:
            print("Mail configuration missing. Skipping send.")
            return redirect(url_for('main', mail_status='unconfigured'))

        msg = Message('Birthday Gift Triggered!', 
                      sender = Config.MAIL_USERNAME, 
                      recipients = [Config.MAIL_RECEIVER])
        msg.body = f"The gift link was clicked by {current_user.username}!"
        mail.send(msg)
        return redirect(url_for('main', mail_status='success'))
    except Exception as e:
        print(f"Failed to send mail: {e}")
        return redirect(url_for('main', mail_status='error'))