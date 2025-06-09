<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>포도 겔러리</title>
    <link rel="stylesheet" href="./css/header.css" />
    <link rel="stylesheet" href="./css/photo_gallery_post.css" />
    <link rel="stylesheet" href="./css/footer.css" />
  </head>
  <body>
  <?php include __DIR__ . '/header.php'; ?>

    <!-- 메인 -->
    <div class="banner-container">
      <!-- 와이드 이미지 -->
      <img src="" alt="main" class="banner-image" id="post-image" />
      <div class="banner-text">
        <h1 id="post-title"></h1>
        <div class="author-info">
          <img src="" alt="author" class="author-image" id="author-image" />
          <div class="author-details">
            <strong id="author-name"></strong><span id="post-category"></span><br />
            <span id="post-date"></span>
          </div>
        </div>
      </div>
    </div>

    <div class="center-image">
      <img src="" alt="main" id="post-image-duplicate" />
    </div>

    <div class="content" id="post-content">
      <!-- 본문 동적 삽입 -->
    </div>

    <!-- 댓글 -->
    <div class="comment-box">
      <h2>스팟 댓글 <span>(0)</span></h2>
      <div class="placeholder-box" onclick="openLoginPopup()">
        🔒 &nbsp 댓글을 남기거나 질문을 하려면
        <span class="highlight">로그인하거나 무료로 가입</span> 하세요.
      </div>
    </div>

    <!-- 푸터 -->
    <footer>
      <div class="footer-container">
        <div class="footer-top">
          <a href="https://www.kakao.com/policy/terms" target="_blank" class="link_info #home_footer" rel="noopener noreferrer">이용약관</a>
          <span>|</span>
          <a href="https://www.kakao.com/policy/location?lang=ko" target="_blank" rel="noopener noreferrer">위치정보 이용약관</a>
          <span>|</span>
          <a href="https://www.kakao.com/policy/privacy?type=p&lang=ko" target="_blank" rel="noopener noreferrer">개인정보 처리방침</a>
          <span>|</span>
          <a href="https://www.kakao.com/policy/oppolicy?lang=ko" target="_blank" rel="noopener noreferrer">운영정책</a>
          <span>|</span>
          <a href="#">앱 사용 가이드</a>
        </div>

        <div class="footer-bottom">
          <div class="info">
            <p>찍어보이소 | 사업자번호: 012-34-56789</p>
            <p>대표자명: 도와조 | 주소: 대구 동구 디지털로12길 345</p>
            <p>이메일: <a href="mailto:help@warmfactory.com">help@photo-spot.com</a></p>
            <p>© 2025, 찍어보이소 Copyright.</p>
          </div>
          <div class="logo">
            <div class="logo">
              <img src="./img/image-logo-w.png" alt="로고" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  </body>
  <script src="./js/photo_gallery_data.js"></script>
  <script src="./js/photo_gallery_post.js"></script>
</html>
