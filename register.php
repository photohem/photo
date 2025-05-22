<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
session_start();

// DB 정보
$host = "localhost";
$dbUser = "root";
$dbPass = "";
$dbName = "poto";

// DB 연결
$conn = new mysqli($host, $dbUser, $dbPass, $dbName);

// 연결 확인
if ($conn->connect_error) {
    die("연결 실패: " . $conn->connect_error);
}

// POST 요청일 경우만 처리
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = trim($_POST["username"]);
    $password = $_POST["password"];
    $confirm_password = $_POST["confirm_password"];

    // 비밀번호 확인
    if ($password !== $confirm_password) {
        die("❌ 비밀번호가 일치하지 않습니다.");
    }

    // 비밀번호 해싱
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // 중복 사용자 확인
    $checkSql = "SELECT id FROM member WHERE username = ?";
    $stmt = $conn->prepare($checkSql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        die("❌ 이미 존재하는 아이디입니다.");
    }
    $stmt->close();

    // 사용자 등록
    $sql = "INSERT INTO member (username, password) VALUES (?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $username, $hashedPassword);

    if ($stmt->execute()) {
        echo "<script>alert('✅ 회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.'); location.href='login_form.html';</script>";
    } else {
        echo "오류: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
