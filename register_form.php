<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>회원가입</title>
    <link rel="stylesheet" href="./css/common.css" />
    <style>
      body {
        background-color: #f8f9fa;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }

      .register-container {
        background: white;
        padding: 40px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        width: 400px;
        text-align: center;
      }

      h2 {
        margin-bottom: 20px;
        color: #005299;
      }

      form {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      label {
        align-self: flex-start;
        margin: 10px 0 5px;
        font-weight: bold;
      }

      input {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }

      button {
        width: 100%;
        padding: 10px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }

      button:hover {
        background-color: #0056b3;
      }

      .kakao-btn {
        background-color: #fee500;
        color: #3c1e1e;
        font-weight: bold;
        margin-top: 10px;
      }
    </style>
  </head>
  <body>
    <div class="register-container">
      <h2>회원가입</h2>
      <form action="./register.php" method="post">
        <label for="username">아이디:</label>
        <input type="text" id="username" name="username" required />

        <label for="email">이메일:</label>
        <input type="email" id="email" name="email" required />

        <label for="password">비밀번호:</label>
        <input type="password" id="password" name="password" required />

        <label for="confirm_password">비밀번호 확인:</label>
        <input type="password" id="confirm_password" name="confirm_password" required />

        <button type="submit">가입하기</button>

        <!-- 추후 연동 시 사용 -->
        <!-- <button type="button" class="kakao-btn" onclick="location.href='kakao_login.php'">카카오로 가입하기</button> -->
      </form>
    </div>
  </body>
</html>
