<?php
// kakao_login.php
session_start();

// [1] code 파라미터 확인
if (!isset($_GET['code'])) {
    echo "⚠️ 잘못된 접근입니다. 카카오 로그인 버튼을 통해 로그인해주세요.";
    exit;
}

$code = $_GET['code'];

// [2] 토큰 요청
$token_url = "https://kauth.kakao.com/oauth/token";
$data = [
    "grant_type" => "authorization_code",
    "client_id" => "bcbd2d1f29eee5af3a86213c9234ecfa", // 👉 너의 REST API 키
    "redirect_uri" => "http://localhost/photo/kakao_login.php", // 👉 카카오 개발자 콘솔에 등록한 Redirect URI
    "code" => $code
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $token_url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
$response = curl_exec($ch);
curl_close($ch);

$tokenData = json_decode($response, true);
$access_token = $tokenData['access_token'] ?? null;

if (!$access_token) {
    echo "❌ 액세스 토큰을 가져올 수 없습니다.";
    echo "<pre>";
    print_r($tokenData);
    echo "</pre>";
    exit;
}

// [3] 사용자 정보 요청
$userInfoUrl = "https://kapi.kakao.com/v2/user/me";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $userInfoUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Bearer " . $access_token
]);
$userInfoResponse = curl_exec($ch);
curl_close($ch);

$userInfo = json_decode($userInfoResponse, true);

// 🔍 [4] 사용자 정보 출력 (디버깅용, 개발 완료 후 삭제 가능)
echo "<h3>✅ 카카오 로그인 성공</h3>";
echo "<pre>";
echo "토큰 정보:\n";
print_r($tokenData);
echo "\n사용자 정보:\n";
print_r($userInfo);
echo "</pre>";

// [5] 사용자 정보 존재 여부 확인 후 세션 저장
if (isset($userInfo['id']) && isset($userInfo['properties']['nickname'])) {
    $_SESSION['username'] = $userInfo['id'];
  

    // [6] index.php로 이동
    header("Location: index.php");
    exit;
} else {
    echo "❌ 사용자 정보가 부족하거나 nickname 항목이 없습니다.<br>";
    echo "👉 카카오 개발자 페이지에서 [카카오 로그인 > 동의항목]에 프로필(닉네임) 항목을 사용 설정해주세요.";
    exit;
}
