<?php
session_start();

// 사용자 입력 받기
$username = $_POST['username'];
$password = $_POST['password'];

// ✅ 'poto' 데이터베이스에 연결
$mysqli = new mysqli("localhost", "root", "", "poto");

// 연결 에러 확인
if ($mysqli->connect_error) {
    die("DB 연결 실패: " . $mysqli->connect_error);
}

// SQL 인젝션 방지
$username = $mysqli->real_escape_string($username);
$password = $mysqli->real_escape_string($password);

// member 테이블에서 사용자 확인
$query = "SELECT * FROM member WHERE username='$username' AND password='$password'";
$result = $mysqli->query($query);

// 로그인 성공 여부 판단
if ($result->num_rows == 1) {
    $_SESSION['username'] = $username;
    echo "<script>alert('로그인 성공!'); location.href='index.html';</script>";
} else {
    echo "<script>alert('아이디 또는 비밀번호가 틀렸습니다.'); history.back();</script>";
}

$mysqli->close();
?>
