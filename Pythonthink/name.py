from flask import Flask, render_template, request, jsonify, render_template

app = Flask(__name__)

comments = []

@app.route('/profile')
def profile():
    return render_template('profile.html')

@app.route('/add_comment', methods=['POST'])
def add_comment():
    comment = request.form['comment']
    comments.append(comment)
    return jsonify({'result': 'success'})


@app.route('/get_comments', methods=['GET'])
def get_comments():
    return jsonify({'comments': comments})


@app.route('/base', methods=['post', 'get'])
@app.route('/', methods=['post', 'get'])
def home():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        return render_template('profile.html',username=username,password=password)
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)

#12345678Ad