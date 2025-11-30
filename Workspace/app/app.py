from flask import Flask, render_template, request, redirect, url_for, session, flash
import mysql.connector

app = Flask(__name__)

# -----------------------------
#  CONEXIÓN A BASE DE DATOS
# -----------------------------
def get_db():
    return mysql.connector.connect(
        host="localhost",
        user="root",          
        password="NikoStasyszyn",
        database="Portafolio"
    )

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
    db = get_db()
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM trabajo")
    trabajos = cursor.fetchall()
    cursor.close()
    db.close()

    return render_template("projects.html", trabajos=trabajos)

@app.route("/add_trabajo", methods=['GET', 'POST'])
def add_trabajo():
    if request.method == 'POST':
        titulo = request.form['titulo']
        descripcion = request.form['descripcion']

        db = get_db()
        cursor = db.cursor()
        
        cursor.execute("""
            INSERT INTO trabajo (usuario_id, titulo, descripcion, fecha_publicacion)
            VALUES (2, %s, %s, CURDATE())
        """, (titulo, descripcion))

        db.commit()
        cursor.close()
        db.close()

        return redirect(url_for('projects'))

    return render_template("add_trabajo.html")

@app.route("/delete/<int:id>")
def delete(id):
    db = get_db()
    cursor = db.cursor()
    cursor.execute("DELETE FROM trabajo WHERE id = %s", (id,))
    db.commit()
    cursor.close()
    db.close()

    return redirect(url_for('projects'))

if __name__ == "__main__":
    app.run(debug=True, port=5400)
