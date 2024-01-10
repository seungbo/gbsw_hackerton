from flask import Flask, render_template, request

app = Flask(__name__)

# 가상으로 사용할 유저 정보
stored_user_info = {
    'username': 'zerone', #사용자 정보등록
    'birthdate': '20240111'  # 사용자 정보등록
}

@app.route('/')
def login():
    return render_template('/login1.html')

@app.route('/login1', methods=['POST'])
def login_post():
    entered_username = request.form['username']
    entered_birthdate = request.form['birthdate']

    # 서버에 저장된 정보와 입력된 정보 비교
    if entered_username == stored_user_info['username'] and entered_birthdate == stored_user_info['birthdate']:
        return '로그인 성공!'
    else:
        return '로그인 실패. 입력 정보를 다시 확인하세요.'

if __name__ == '__main__':
    app.run(debug=True)
