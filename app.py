from flask import Flask, render_template, jsonify, request
from static.scripts.render_latex import *

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

@app.route('/process-data', methods=['POST'])
def process_data():
    data = request.json
    return jsonify({'message': 'Data received successfully!'})

if __name__ == '__main__':
    app.run(debug=True)
    
