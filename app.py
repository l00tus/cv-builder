from flask import Flask, redirect, render_template, jsonify, request, send_file, session, url_for
from static.scripts.render_latex import *
from static.scripts.generate_pdf import *
import sqlite3
from werkzeug.security import generate_password_hash, check_password_hash
import config


app = Flask(__name__)
app.secret_key = config.SECRET_KEY

@app.route('/')
@app.route('/home')
def index():
    return render_template('index.html')

@app.route('/create')
def create():
    return render_template('create.html')

@app.route('/list')
def list():
    return render_template('list.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        if not username or not password:
            return redirect(url_for('login'))
        
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM users WHERE username = ?', (username,))
        user = cursor.fetchone()
        conn.close()
        
        if user and check_password_hash(user['password'], password):
            session['username'] = username
            return redirect(url_for('index'))
        else:
            return redirect(url_for('login'))
                    
    return render_template('signin.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        confirm_password = request.form['confirm-password']
        
        if not username or not password or not confirm_password:
            return redirect(url_for('register'))
        if password != confirm_password:
            return redirect(url_for('register'))
        
        hashed_password = generate_password_hash(password, method='pbkdf2:sha256', salt_length=8)
        
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute('INSERT INTO users (username, password) VALUES (?, ?)', (username, hashed_password))
            conn.commit()
            conn.close()
            return redirect(url_for('login')) # redirect to success register
        except Exception as e:
            return redirect(url_for('register'))
        
    return render_template('signup.html')

@app.route('/generated/cv')
def serve_pdf():
    try:
        path = 'generated/cv.pdf'
        return send_file(path, mimetype='application/pdf')
    except Exception as e:
        return str(e)

@app.route('/process-data', methods=['POST'])
def process_data():
    data = request.json
    generate_cv(data)
    generate_pdf()
    return jsonify({'message': 'Data received successfully!'})

def get_db_connection():
    conn = sqlite3.connect('data/users.db')
    conn.row_factory = sqlite3.Row
    return conn

if __name__ == '__main__':
    app.run(debug=True)
