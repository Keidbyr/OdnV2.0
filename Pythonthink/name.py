from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/profile')
def profile():
    return render_template('profile.html')

@app.route('/base', methods=['post', 'get'])
@app.route('/', methods=['post', 'get'])
def home():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        return render_template('profile.html',username=username,password=password)
    else:
        print('not work')
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)