from flask import Flask
from flask import render_template
from flask.ext.sqlalchemy import SQLAlchemy
from queue import Queue
from hmac import HMAC
import os

app = Flask(__name__)
wd = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(wd, 'data.sqlite')
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
db = SQLAlchemy(app)

# ==============================================================
# hash-based one time password
# ==============================================================


def hotp():
    global counter
    key = os.environ['HOTP_KEY'].encode('ascii')
    count_str = str(counter).encode('ascii')
    counter += 1
    hex_str = HMAC(key, count_str, 'sha1').hexdigest()[-8:]
    return str(int(hex_str, 16) % (10**8))


def generate_keys():
    for i in range(0, 20):
        keys.put(hotp())

# ==============================================================
# SQLite data base
# ==============================================================


# ==============================================================
# HTTP get requests
# ==============================================================


@app.route('/', methods=['GET'])
def main_page():
    return render_template('base.html')


@app.route('/about')
def about_page():
    return render_template('about.html')


@app.route('/login', methods=['GET'])
def login_page():
    return render_template('login.html')

# ==============================================================
# HTTP post
# ==============================================================


@app.route('/login', methods=['POST'])
def login_form():
    return render_template('login.html')

# ==============================================================
# Flask Scripts
# ==============================================================


if __name__ == '__main__':
    app.run()
    keys = Queue(20)
    counter = 0
