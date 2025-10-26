from flask import Flask, render_template, request, redirect, url_for, session, flash

app = Flask(__name__)

@app.route("/")
def main():
    return render_template("main.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/about_me")
def about_me():
    return render_template("about_me.html")

@app.route("/course")
def course():
    return render_template("course.html")

@app.route("/personal")
def personal():
    return render_template("personal.html")

@app.route("/projects")
def projects():
    return render_template("projects.html")

if __name__ == "__main__":
    app.run(debug=True, port=5400)