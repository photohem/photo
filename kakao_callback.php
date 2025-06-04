//<?php
//$client_id = "bcbd2d1f29eee5af3a86213c9234ecfa";
//$redirect_uri = "http://localhost/photo/kakao_callback.php";

// 1단계: 인가 코드 받기
//$code = $_GET['code'];

// 2단계: 토큰 요청
//$token_url = "https://kauth.kakao.com/oauth/token";
//$data = [
//    "grant_type" => "authorization_code",
//    "client_id" => $client_id,
//    "redirect_uri" => $redirect_uri,
//    "code" => $code,
//];

//$options = [
//    "http" => [
//        "header" => "Content-Type: application/x-www-form-urlencoded",
//        "method" => "POST",
//        "content" => http_build_query($data),
//    ]
//];

//$context = stream_context_create($options);
//$response = file_get_contents($token_url, false, $context);
//$token_data = json_decode($response, true);

// 3단계: 사용자 정보 요청
//$access_token = $token_data['access_token'];

//$profile_url = "https://kapi.kakao.com/v2/user/me";
//$options = [
//"http" => [
//        "header" => "Authorization: Bearer " . $access_token,
//        "method" => "GET"
//    ]
//];

//$context = stream_context_create($options);
//$profile_response = file_get_contents($profile_url, false, $context);
//$profile_data = json_decode($profile_response, true);

// 사용자 정보 확인
///$nickname = $profile_data['properties']['nickname'] ?? 'Unknown';

// 세션에 저장하거나 DB 연동 가능
//echo "환영합니다, " . htmlspecialchars($nickname) . "님!";
//?>
