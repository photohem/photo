<?php
session_start();
?>

<header id="header">
  <div class="header-container">
    <div class="left-section">
      <div class="logo">
        <a href="index.php">
          <img src="./img/image-logo-w.png" alt="로고" />
        </a>
      </div>
    </div>

    <nav class="menu">
      <a href="./shoot.php" id="menu1">찍어보이소</a>
      <a href="./skill.php" id="menu2">알아보이소</a>
    </nav>

    <div class="right-section">
      <div class="right-content-group">
        <?php if (isset($_SESSION['username'])): ?>
          <span class="right-content"><?php echo $_SESSION['username']; ?>님 환영합니다!</span>
          <a class="right-content" href="logout.php">로그아웃</a>
        <?php else: ?>
          <a class="right-content" href="login_form.php">로그인</a>
          <a class="right-content" href="register_form.php">회원가입</a>
        <?php endif; ?>
      </div>
    </div>
  </div>
</header>
