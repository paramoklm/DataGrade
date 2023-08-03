from flask import Flask
from grid import Grid, Module, Subject, Grade

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World'

if __name__ == '__main__':
    app.run()