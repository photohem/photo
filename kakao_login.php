<?php
// Kakao REST API Key
$client_id = "bcbd2d1f29eee5af3a86213c9234ecfa";
$redirect_uri = "http://localhost/kakao_callback.php"; // 실제 리다이렉트 주소

// 카카오 인증 페이지로 리다이렉트
$url = "https://kauth.kakao.com/oauth/authorize?client_id={$client_id}&redirect_uri={$redirect_uri}&response_type=code";

header("Location: $url");
exit;
?>
