<!DOCTYPE php>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>알아보이소</title>
    <link rel="stylesheet" href="./css/header.css" />
    <link rel="stylesheet" href="./css/skill.css" />
    <link rel="stylesheet" href="./css/footer.css" />

  </head>
  <body>
  <?php include("header.php"); ?>


    <!-- 서브 1page -->
    <div class="skill">
   
      <!-- 찍자 페이지 콘텐츠 -->   
      <div class="knowhow-wrapper">
        <h2 class="knowhow-heading">📸 알아보이소~!</h2>

      <div class="knowhow-container">
        <div class="knowhow-grid">
          <!-- 카드 1 -->
          <div class="knowhow-card">
            <a href="skill1.php">
              <img src="./img/skill01.jpg" alt="노하우1" />
            </a>
            <a class="knowhow-title" href="skill1.php">밝히는 은하수 명소 촬영 팁</a>
            <div class="knowhow-meta">2025. 5. 8. </div>
          </div>

          <!-- 카드 2 -->
          <div class="knowhow-card">
            <a href="skill2.php">
              <img src="./img/skill02.jpg" alt="노하우2" />
            </a>
            <a class="knowhow-title" href="skill2.php">작가처럼 달 사진 찍는 법</a>
            <div class="knowhow-meta">2025. 3. 3. </div>
          </div>

          
        </div>
      </div>
    </div>

    <?php include __DIR__ . '/footer.php'; ?>


  </body>
</html>