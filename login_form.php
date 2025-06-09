<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>로그인</title>
    <link rel="stylesheet" href="./css/common.css" />
    <?php
//카카오 로그인에 관련된 정보
$kakaoRestApiKey = "bcbd2d1f29eee5af3a86213c9234ecfa"; //카카오톡에서 주는 ID
$kakaoRedirectUri = "http://localhost/photo/kakao_login.php"; //로그인 후 DB처리할 URL
$kakaoLoginUrl = "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id={$kakaoRestApiKey}&redirect_uri={$kakaoRedirectUri}";
$naverClientId = "6mfZvue5_NyY9uLM5gNe"; // 네이버 앱의 Client ID
$naverRedirectUri = "http://localhost/photo/naver_login.php";
$naverState = uniqid(); // CSRF 방지를 위한 state 값

$naverLoginUrl = "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id={$naverClientId}&redirect_uri={$naverRedirectUri}&state={$naverState}";

?>
    <link rel="stylesheet" href="./css/login_form.css" />
  </head>
  <body>
    <div class="container">
      <h2>로그인</h2>
      <form action="login.php" method="post">
        <label for="login_id">아이디 또는 이메일</label>
        <input type="text" id="login_id" name="login_id" required />

        <label for="password">비밀번호</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">로그인</button>

        <!-- 수정 -->
        <a href="<?=$kakaoLoginUrl?>" class="kakao-login-btn">카카오톡으로 로그인</a>
        <a href="<?=$naverLoginUrl?>" class="naver-login-btn">네이버로 로그인</a>


        <div class="link-row">
          <a href="find_id.php">아이디 찾기</a> |
          <a href="find_pw.php">비밀번호 찾기</a>
        </div>
      </form>
    </div>
  </body>
</html>
