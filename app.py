import base64
import io
import zipfile
from flask import Flask, redirect, render_template, jsonify, request, send_file, session, url_for
from static.scripts.render_latex import *
from static.scripts.generate_pdf import *
from datetime import datetime
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
    if 'user_id' not in session:
        return redirect(url_for('login'))
    
    user_id = session['user_id']
    conn = get_db_connection('cv')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM cvs WHERE user_id = ?', (user_id,))
    cvs = cursor.fetchall()
    conn.close()
    
    cv_b64 = []
    for cv in cvs:
        cv_dict = dict(cv)
        cv_dict['pdf_data'] = base64.b64encode(cv_dict['pdf_data']).decode('utf-8')
        cv_b64.append(cv_dict)
        
    return render_template('list.html', cvs=cv_b64)

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
        
        conn = get_db_connection('users')
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM users WHERE username = ?', (username,))
        user = cursor.fetchone()
        conn.close()
        
        if user and check_password_hash(user['password'], password):
            session['username'] = username
            session['user_id'] = user['id']
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
            conn = get_db_connection('users')
            cursor = conn.cursor()
            cursor.execute('INSERT INTO users (username, password) VALUES (?, ?)', (username, hashed_password))
            conn.commit()
            conn.close()
            return redirect(url_for('login')) # redirect to success register
        except Exception as e:
            return redirect(url_for('register'))
        
    return render_template('signup.html')

@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('index'))

@app.route('/generated/cv')
def serve_pdf():
    try:
        path = 'generated/cv.pdf'
        
        return send_file(path, mimetype='application/pdf')
    except Exception as e:
        return str(e)
    
@app.route('/download-pdf')
def download_pdf():
    try:
        path = 'generated/cv.pdf'
        now = datetime.now()
        filename = 'cv_' + now.strftime('%dH%M%S') + '.pdf'
        return send_file(path, as_attachment=True, download_name=filename, mimetype='application/pdf')
    except Exception as e:
        return str(e)

@app.route('/download-tex')
def download_tex():
    try:
        path = 'generated/cv.tex'
        now = datetime.now()
        filename = 'cv_' + now.strftime('%dH%M%S') + '.tex'
        return send_file(path, as_attachment=True, download_name=filename, mimetype='application/x-tex')
    except Exception as e:
        return str(e)

@app.route('/download-zip/<int:cv_id>')
def download_zip(cv_id):
    cv_pdf_data, cv_tex_data = get_cv_data_from_db(cv_id)
    zip_buffer = io.BytesIO()
    
    with zipfile.ZipFile(zip_buffer, 'w') as zip_file:
        zip_file.writestr('cv.pdf', cv_pdf_data)
        zip_file.writestr('cv.tex', cv_tex_data)
    
    zip_buffer.seek(0)
    
    return send_file(zip_buffer, as_attachment=True, download_name='cv.zip', mimetype='application/zip')

def get_cv_data_from_db(cv_id):
    conn = get_db_connection('cv')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM cvs WHERE id = ?', (cv_id,))
    cv = cursor.fetchone()
    conn.close()
    
    return cv['pdf_data'], cv['tex_data']

@app.route('/save-cv', methods=['POST'])
def save_cv():
    if 'user_id' not in session:
        return redirect(url_for('login'))
    
    user_id = session['user_id']
    pdf_path = 'generated/cv.pdf'
    tex_path = 'generated/cv.tex'
    
    if os.path.exists(pdf_path) and os.path.exists(tex_path):
        pdf_data, tex_data = get_cv_data(pdf_path, tex_path)
        save_cv_data(user_id, pdf_data, tex_data)
        
        return redirect(url_for('list')) #modify to redirect to list
    else:
        print('Files not found')
        return redirect(url_for('index')) #modify to redirect to list
    
def get_cv_data(pdf_path, tex_path):
    with open(pdf_path, 'rb') as pdf_file, open(tex_path, 'rb') as tex_file:
        pdf_data = pdf_file.read()
        tex_data = tex_file.read()
    
    return pdf_data, tex_data

def save_cv_data(user_id, pdf_data, tex_data):
    conn = get_db_connection('cv')
    cursor = conn.cursor()
    
    cursor.execute('INSERT INTO cvs (user_id, pdf_data, tex_data) VALUES (?, ?, ?)', (user_id, pdf_data, tex_data))
    
    conn.commit()
    conn.close()

@app.route('/process-data', methods=['POST'])
def process_data():
    data = request.json
    generate_cv(data)
    generate_pdf()
    return jsonify({'message': 'Data received successfully!'})

def get_db_connection(database):
    if database == 'users':
        conn = sqlite3.connect('data/users.db')
    elif database == 'cv':
        conn = sqlite3.connect('data/cv.db')
    else:
        raise ValueError('Invalid database name')
        
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/check-session')
def check_session():
    session_variables = {}
    for key, value in session.items():
        session_variables[key] = value
    return jsonify(session_variables)

if __name__ == '__main__':
    app.run(debug=True)
