<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
session_start();

// DB 연결 정보
$host = "localhost";
$dbUser = "root";
$dbPass = "";
$dbName = "poto";

// DB 연결
$mysqli = new mysqli($host, $dbUser, $dbPass, $dbName);
if ($mysqli->connect_error) {
    die("DB 연결 실패: " . $mysqli->connect_error);
}

// POST로 받은 로그인 정보
$login_id = $_POST['login_id']; // username 입력
$password = $_POST['password'];

// SQL 인젝션 방지
$login_id = $mysqli->real_escape_string($login_id);

// 사용자 정보 조회
$query = "SELECT * FROM member WHERE username = ?";
$stmt = $mysqli->prepare($query);
$stmt->bind_param("s", $login_id);
$stmt->execute();
$result = $stmt->get_result();

// 로그인 처리
if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();

    // 비밀번호 비교 (해시값 비교)
    if (password_verify($password, $user['password'])) {
        $_SESSION['username'] = $user['username'];
        echo "<script>alert('로그인 성공!'); location.href='index.php';</script>";
    } else {
        echo "<script>alert('비밀번호가 틀렸습니다.'); history.back();</script>";
    }
} else {
    echo "<script>alert('존재하지 않는 계정입니다.'); history.back();</script>";
}

$stmt->close();
$mysqli->close();
?>
