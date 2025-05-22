<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>찍어보이소^^</title>
    <link rel="stylesheet" href="./css/header.css" />
    <link rel="stylesheet" href="./css/main2_photo_gallery.css" />
    <link rel="stylesheet" href="./css/main3_keyword.css" />
    <link rel="stylesheet" href="./css/main4_photo_story.css" />
    <link rel="stylesheet" href="./css/footer.css" />
 

    <script src="./js/photo_story.js"></script>
  </head>
  <body>
    <?php include("header.php"); ?>

    

    <!-- 메인2 사진겔러리  -->
<div class="photo-gallery">
  <div class="gallery-title">
    <h2>Top 10 Photos</h2>
    <span class="date">25.05.</span>
  </div>
  <div class="grid">
    <a href="photo_gallery2.html?id=1">
    <img src="./img/photo1.jpg" alt="Photo 1" />
  </a>
    <a href="photo_gallery2.html?id=2">
    <img src="./img/photo3.jpg" alt="Photo 2" />
  </a>
    <a href="photo_gallery2.html?id=3">
    <img src="./img/photo6.jpg" alt="Photo 3" />
  </a>
    <a href="photo_gallery2.html?id=4">
    <img src="./img/photo12.jpg" alt="Photo 4" />
  </a>
    <a href="photo_gallery2.html?id=5">
    <img src="./img/photo25.jpg" alt="Photo 5" />
  </a>
    <a href="photo_gallery2.html?id=6">
    <img src="./img/photo2.jpg" alt="Photo 6" />
  </a>
    <a href="photo_gallery2.html?id=7" class="wide">
    <img src="./img/photo5.jpg" alt="Photo 7" />
  </a>
    <a href="photo_gallery2.html?id=8">
    <img src="./img/photo8.jpg" alt="Photo 8" />
  </a>
    <a href="photo_gallery2.html?id=9">
    <img src="./img/photo9.jpg" alt="Photo 9" />
  </a>
    <a href="photo_gallery2.html?id=10">
    <img src="./img/photo10.jpg" alt="Photo 10" />
  </a>
</div>

</div>

    <!-- 메인3 키워드 명소 테이블 -->
    <section class="keyword-section">
      <h2 class="keyword-title">찍어보이소 KEYWORD 명소</h2>

      <div class="keyword-grid">
        <a href="detail.html?place=83tower" class="keyword-item">이월드<br>83타워<br>벚꽃</a>
        <a href="detail.html?place=nongong" class="keyword-item">논공꽃단지<br>핑크뮬리</a>
        <a href="detail.html?place=catholic" class="keyword-item">계산성당</a>
        <a href="detail.html?place=kim_street" class="keyword-item">김광석길</a>
        <a href="detail.html?place=theARC" class="keyword-item">강정고령보 <br>디아크</a>
        <a href="detail.html?place=samunjin" class="keyword-item">사문진 나루터</a>
        <a href="detail.html?place=dalseong_wetland" class="keyword-item">달성습지</a>
        <a href="detail.html?place=80san" class="keyword-item">팔공산</a>

        <a href="detail.html?place=munssi" class="keyword-item">남평문씨<br>본리세거지<br>6월 능소화</a>
        <a href="detail.html?place=hajungdo" class="keyword-item">하중도</a>
        <a href="detail.html?place=biseulsan" class="keyword-item">비슬산<br> 참꽃</a>
        <a href="detail.html?place=suseong" class="keyword-item">수성못</a>
        <a href="detail.html?place=songhae" class="keyword-item">송해공원</a>
        <a href="detail.html?place=leesanghwa" class="keyword-item">이상화고택</a>
        <a href="detail.html?place=dalseong_toseong" class="keyword-item">달성토성</a>
        <a href="detail.html?place=chimsan" class="keyword-item">침산공원<br> 벚꽃</a>

        <a href="detail.html?place=dongchon" class="keyword-item">동촌유원지<br>개나리, 벚꽃</a>
        <a href="detail.html?place=ihyeon" class="keyword-item">이현공원<br>샤스테이데이지</a>
        <a href="detail.html?place=campsis" class="keyword-item">중구 대봉동<br>능소화폭포</a>
        <a href="detail.html?place=arboretum" class="keyword-item">대구수목원</a>
        <a href="detail.html?place=house" class="keyword-item">적산가옥<br>능소화</a>
        <a href="detail.html?place=haebaragi" class="keyword-item">논공꽃단지<br>9월 해바라기</a>
        <a href="detail.html?place=eworld" class="keyword-item">이월드 벚꽃</a>
        <a href="detail.html?place=sinsunggyeom" class="keyword-item">신숭겸장군<br>유적지<br>배롱나무</a>
      </div>
    </section>

    <!-- 메인4 스토리-->
    <div  class="story-header">
      <h2 class="story-title">좋다는 글 한번 읽어보이소</h2>
      <p class="story-subtitle">다양한 글을 만나보세요.</p>
    </div>

    <section class="story-section">    
    
      <div class="custom-story-wrap">
        <div class="custom-story" id="story-track">
          <!-- 반복되는 슬라이드 -->
          <div class="story">
            <img src="./img/photo22.jpg" alt="설명" />
            <h3 class="story-heading">핑크뮬리</h3>
            <p class="story-text">벼과이다 보니 자세히 보면 벼와 비슷하게 생겼다. 9~11월에 피는 핑크색 꽃이 인상적이며, 열매는 갈색이다. 2012년 미국 가든 클럽에서 올해의 식물로 선정된 이후로 2013년부터 국내에 들어왔다. 한국에서는 경주의 첨성대 인근, 칠곡의 가산수피아, 부산의 을숙도, 서울특별시의 양재천 등에 식재되어 있다.</p>
          </div>

          <div class="story">
            <img src="./img/photo17.jpg" alt="설명" />
            <h3 class="story-heading">핑크뮬리</h3>
            <p class="story-text">벼과이다 보니 자세히 보면 벼와 비슷하게 생겼다. 9~11월에 피는 핑크색 꽃이 인상적이며, 열매는 갈색이다. 2012년 미국 가든 클럽에서 올해의 식물로 선정된 이후로 2013년부터 국내에 들어왔다. 한국에서는 경주의 첨성대 인근, 칠곡의 가산수피아, 부산의 을숙도, 서울특별시의 양재천 등에 식재되어 있다.</p>
          </div>

          <div class="story">
            <img src="./img/photo21.jpg" alt="설명" />
            <h3 class="story-heading">핑크뮬리</h3>
            <p class="story-text">벼과이다 보니 자세히 보면 벼와 비슷하게 생겼다. 9~11월에 피는 핑크색 꽃이 인상적이며, 열매는 갈색이다. 2012년 미국 가든 클럽에서 올해의 식물로 선정된 이후로 2013년부터 국내에 들어왔다. 한국에서는 경주의 첨성대 인근, 칠곡의 가산수피아, 부산의 을숙도, 서울특별시의 양재천 등에 식재되어 있다.</p>
          </div>

          <div class="story">
            <img src="./img/photo20.jpg" alt="설명" />
            <h3 class="story-heading">핑크뮬리</h3>
            <p class="story-text">벼과이다 보니 자세히 보면 벼와 비슷하게 생겼다. 9~11월에 피는 핑크색 꽃이 인상적이며, 열매는 갈색이다. 2012년 미국 가든 클럽에서 올해의 식물로 선정된 이후로 2013년부터 국내에 들어왔다. 한국에서는 경주의 첨성대 인근, 칠곡의 가산수피아, 부산의 을숙도, 서울특별시의 양재천 등에 식재되어 있다.</p>
          </div>

          <div class="story">
            <img src="./img/photo19.jpg" alt="설명" />
            <h3 class="story-heading">핑크뮬리</h3>
            <p class="story-text">벼과이다 보니 자세히 보면 벼와 비슷하게 생겼다. 9~11월에 피는 핑크색 꽃이 인상적이며, 열매는 갈색이다. 2012년 미국 가든 클럽에서 올해의 식물로 선정된 이후로 2013년부터 국내에 들어왔다. 한국에서는 경주의 첨성대 인근, 칠곡의 가산수피아, 부산의 을숙도, 서울특별시의 양재천 등에 식재되어 있다.</p>
          </div>

          <div class="story">
            <img src="./img/photo18.jpg" alt="설명" />
            <h3 class="story-heading">핑크뮬리</h3>
            <p class="story-text">벼과이다 보니 자세히 보면 벼와 비슷하게 생겼다. 9~11월에 피는 핑크색 꽃이 인상적이며, 열매는 갈색이다. 2012년 미국 가든 클럽에서 올해의 식물로 선정된 이후로 2013년부터 국내에 들어왔다. 한국에서는 경주의 첨성대 인근, 칠곡의 가산수피아, 부산의 을숙도, 서울특별시의 양재천 등에 식재되어 있다.</p>
          </div>
          
          <div class="story">
            <img src="./img/photo17.jpg" alt="설명" />
            <h3 class="story-heading">핑크뮬리</h3>
            <p class="story-text">벼과이다 보니 자세히 보면 벼와 비슷하게 생겼다. 9~11월에 피는 핑크색 꽃이 인상적이며, 열매는 갈색이다. 2012년 미국 가든 클럽에서 올해의 식물로 선정된 이후로 2013년부터 국내에 들어왔다. 한국에서는 경주의 첨성대 인근, 칠곡의 가산수피아, 부산의 을숙도, 서울특별시의 양재천 등에 식재되어 있다.</p>
          </div>
          
          <div class="story">
            <img src="./img/photo16.jpg" alt="설명" />
            <h3 class="story-heading">핑크뮬리</h3>
            <p class="story-text">벼과이다 보니 자세히 보면 벼와 비슷하게 생겼다. 9~11월에 피는 핑크색 꽃이 인상적이며, 열매는 갈색이다. 2012년 미국 가든 클럽에서 올해의 식물로 선정된 이후로 2013년부터 국내에 들어왔다. 한국에서는 경주의 첨성대 인근, 칠곡의 가산수피아, 부산의 을숙도, 서울특별시의 양재천 등에 식재되어 있다.</p>
          </div>
          
          <div class="story">
            <img src="./img/photo15.jpg" alt="설명" />
            <h3 class="story-heading">핑크뮬리</h3>
            <p class="story-text">벼과이다 보니 자세히 보면 벼와 비슷하게 생겼다. 9~11월에 피는 핑크색 꽃이 인상적이며, 열매는 갈색이다. 2012년 미국 가든 클럽에서 올해의 식물로 선정된 이후로 2013년부터 국내에 들어왔다. 한국에서는 경주의 첨성대 인근, 칠곡의 가산수피아, 부산의 을숙도, 서울특별시의 양재천 등에 식재되어 있다.</p>
          </div>

          <!-- 반복 -->
        </div>
    
        <div class="story-nav">
          <button class="story_prev hide">＜</button>
          <button class="story_next hidet">＞</button>
        </div>
      </div>
    </section>
    
    </div>

    <!-- 푸터 -->
    <footer>
      <div class="footer-container">
        <div class="footer-top">
          <a
            href="https://www.kakao.com/policy/terms"
            target="_blank"
            class="link_info #home_footer"
            rel="noopener noreferrer"
            >이용약관</a
          >
          <span>|</span>
          <a
            href="https://www.kakao.com/policy/location?lang=ko"
            target="_blank"
            rel="noopener noreferrer"
            >위치정보 이용약관</a
          >
          <span>|</span>
          <a
            href="https://www.kakao.com/policy/privacy?type=p&lang=ko"
            target="_blank"
            rel="noopener noreferrer"
            >개인정보 처리방침</a
          >
          <span>|</span>
          <a
            href="https://www.kakao.com/policy/oppolicy?lang=ko"
            target="_blank"
            rel="noopener noreferrer"
            >운영정책</a
          >
          <span>|</span>
          <a href="guide.html" target="_blank" rel="noopener noreferrer">앱 사용 가이드</a>
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
</html>
