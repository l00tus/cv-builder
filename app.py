from flask import Flask, render_template, jsonify, request, send_file
from static.scripts.render_latex import *
from static.scripts.generate_pdf import *

app = Flask(__name__)

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

@app.route('/login')
def login():
    return render_template('signin.html')

@app.route('/register')
def register():
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

if __name__ == '__main__':
    app.run(debug=True)
