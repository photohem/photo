<?php
session_start();
if (!isset($_SESSION['username'])) {
  echo "<script>alert('로그인이 필요합니다.'); location.href='login_form.html';</script>";
  exit;
}
?>
