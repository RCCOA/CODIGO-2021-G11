from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return '<h1>Hola mundo Web</h1>'

app.run()