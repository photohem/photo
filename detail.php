<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>대구명소들 - 찍어보이소</title>
  <!-- 공통 CSS -->
  <link rel="stylesheet" href="./css/common.css" />
  <!-- 헤더·푸터 스타일 -->
  <link rel="stylesheet" href="./css/header.css" />
  <link rel="stylesheet" href="./css/footer.css" />
  <!-- 이 페이지 전용 CSS -->
  <link rel="stylesheet" href="./css/detail.css" />
  <!-- jQuery -->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js" defer></script>
  <!-- bxSlider -->
  <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.15/jquery.bxslider.min.css" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.15/jquery.bxslider.min.js" defer></script>
  <script src="./js/header.js" defer></script>
  <script src="./js/detail.js" defer></script>
</head>
<body>
  <?php include __DIR__ . '/header.php'; ?>

  <main class="all-place-container" id="all-place-container">
    <!-- 장소 상세 콘텐츠는 detail.js에서 렌더링 -->
  </main>

  <section class="feedback-section-container">
    <!-- 댓글·별점 영역 -->
    …
  </section>

  <?php include __DIR__ . '/footer.php'; ?>
</body>
</html>
