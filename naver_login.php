<?php
session_start();

// 네이버 앱 정보
$client_id = "6mfZvue5_NyY9uLM5gNe";
$client_secret = "eofAAcoDOr";
$redirectURI = urlencode("http://localhost/photo/naver_login.php");

$code = $_GET["code"];
$state = $_GET["state"];

// 토큰 요청
$url = "https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id={$client_id}&client_secret={$client_secret}&redirect_uri={$redirectURI}&code={$code}&state={$state}";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

$responseObj = json_decode($response, true);
if (!$responseObj || !isset($responseObj['access_token'])) {
    echo "토큰 요청 실패<br>";
    var_dump($response);
    exit;
}

$access_token = $responseObj['access_token'];

// 사용자 정보 요청
$meUrl = "https://openapi.naver.com/v1/nid/me";
$meHeaders = ["Authorization: Bearer {$access_token}"];
$meCh = curl_init();
curl_setopt($meCh, CURLOPT_URL, $meUrl);
curl_setopt($meCh, CURLOPT_HTTPHEADER, $meHeaders);
curl_setopt($meCh, CURLOPT_RETURNTRANSFER, true);
$meResponse = curl_exec($meCh);
curl_close($meCh);

$userData = json_decode($meResponse, true);
if (!$userData || $userData['resultcode'] !== "00") {
    echo "사용자 정보 가져오기 실패<br>";
    var_dump($meResponse);
    exit;
}

$naver_user = $userData['response'];

// ✅ 세션 저장
$_SESSION['username'] = $naver_user['name'];
$_SESSION['user_email'] = $naver_user['email'];
$_SESSION['user_id'] = $naver_user['id'];
$_SESSION['provider'] = 'naver';

// ✅ 리디렉션 (echo 보다 위에 있어야 함)
header("Location: index.php");
exit;
?>
