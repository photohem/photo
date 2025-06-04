<!DOCTYPE php>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>찍어보이소</title>
    <link rel="stylesheet" href="./css/header.css" />
    <link rel="stylesheet" href="./css/shoot.css" />
    <link rel="stylesheet" href="./css/footer.css" />
    
    <script src="./js/header.js"></script>
    <script src="./js/shoot.js"></script>

  </head>
<body>
  <?php include("header.php"); ?>


      <!-- 명소 검색창 -->
      <div class="search-container">
        <div class="search-title">대구 명소 검색해보이소!</div>
        <div class="search-box">
          <div class="search-input-wrapper">
          <input
            id="searchInput"
            class="search-input"
            type="text"
            placeholder="가고 싶은 대구 명소를 입력하세요."
          />
          <button class="search-btn" onclick="searchPlace()" aria-label="검색">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"/>
            </svg>
          </button>
        </div>
        </div>
          
    <!-- 서브1 -->
    <div id="photo-Content">
    <section id="shoot-photo">
      <h2>📸 찍어보이소~!</h2>
      <div class="grid-container">
        <div class="grid-item w-3 h-2" data-place="83tower">
          <a href="detail.php?place=83tower">
          <img src="./img/photo1.jpg" alt="83타워">
          <div class="overlay">
            <span class="place-name">이월드83타워 <br>벚꽃</span></div>
          </a>
        </div>
        <div class="grid-item w-2 h-2" data-place="arboretum">
          <a href="detail.php?place=arboretum">
          <img src="./img/photo2.jpg" alt="대구수목원">
          <div class="overlay">
            <span class="place-name">대구수목원</span></div>
          </a>
        </div> 
        <div class="grid-item h-2" data-place="80san">
          <a href="detail.php?place=80san">
          <img src="./img/photo3.jpg" alt="팔공산">
          <div class="overlay">
            <span class="place-name">팔공산</span></div>
          </a>
        </div>
        <div class="grid-item w-2 h-2" data-place="theARC">
          <a href="detail.php?place=theARC">
          <img src="./img/photo4.jpg" alt="">
          <div class="overlay">
            <span class="place-name">강정고령보 디아크</span></div>
            </a>
        </div>
        <div class="grid-item w-2 h-2" data-place="biseulsan">
          <a href="detail.php?place=biseulsan">
          <img src="./img/photo5.jpg" alt="">
          <div class="overlay">
            <span class="place-name">비슬산 <br>참꽃</span></div>
          </a>
        </div>
        <div class="grid-item w-2 h-2" data-place="suseong">
          <a href="detail.php?place=suseong">
          <img src="./img/photo6.jpg" alt="">
          <div class="overlay">
            <span class="place-name">수성못</span></div>
          </a>
        </div>
        <div class="grid-item w-3" data-place="songhae">
          <a href="detail.php?place=songhae">
          <img src="./img/photo7.jpg" alt="">
          <div class="overlay">
            <span class="place-name">송해공원</span></div>
          </a>
        </div>
        <div class="grid-item w-2" data-place="leesanghwa">
          <a href="detail.php?place=leesanghwa">
          <img src="./img/photo8.jpg" alt="">
          <div class="overlay">
            <span class="place-name">시인 이상화고택</span></div>
          </a>
        </div>
        <div class="grid-item w-1" data-place="dalseong_toseong">
          <a href="detail.php?place=dalseong_toseong">
          <img src="./img/photo9.jpg" alt="">
          <div class="overlay">
            <span class="place-name">달성토성</span></div>
          </a>
        </div>
        <div class="grid-item w-2 h-2" data-place="chimsan">
          <a href="detail.php?place=chimsan">
          <img src="./img/photo10.jpg" alt="">
          <div class="overlay">
            <span class="place-name">침산공원 <br>벚꽃</span></div>
          </a>
        </div>
        <div class="grid-item w-1 h-2" data-place="munssi">
          <a href="detail.php?place=munssi">
          <img src="./img/photo11.jpg" alt="">
          <div class="overlay">
            <span class="place-name">남평문씨 <br> 본리세거지 <br>6월 능소화</span></div>
          </a>
        </div>
        <div class="grid-item w-1 h-2" data-place="catholic">
          <a href="detail.php?place=catholic">
          <img src="./img/photo12.jpg" alt="">
          <div class="overlay">
            <span class="place-name">계산성당</span></div>
          </a>
        </div>
        <div class="grid-item w-2 h-2" data-place="dongchon">
          <a href="detail.php?place=dongchon">
          <img src="./img/photo13.jpg" alt="">
          <div class="overlay">
            <span class="place-name">동촌유원지 <br>개나리, 벚꽃</span></div>
          </a>
        </div>
        <div class="grid-item w-1" data-place="dalseong_wetland">
          <a href="detail.php?place=dalseong_wetland">
          <img src="./img/photo14.jpg" alt="">
          <div class="overlay">
            <span class="place-name">달성습지</span></div>
          </a>
        </div>
        <div class="grid-item w-4" data-place="hajungdo">
          <a href="detail.php?place=hajungdo">
          <img src="./img/photo15.jpg" alt="">
          <div class="overlay">
            <span class="place-name">금호꽃섬 하중도</span></div>
          </a>
        </div>
        <div class="grid-item w-1" data-place="ihyeon">
          <a href="detail.php?place=ihyeon">
          <img src="./img/photo16.jpg" alt="">
          <div class="overlay">
            <span class="place-name">이현공원 <br>샤스테이데이지</span></div>
          </a>
        </div>
        <div class="grid-item w-2 h-3" data-place="campsis">
          <a href="detail.php?place=campsis">
          <img src="./img/photo17.jpg" alt="">
          <div class="overlay">
            <span class="place-name">중구 대봉동<br>능소화폭포</span></div>
          </a>
        </div>
        <div class="grid-item w-2 h-2" data-place="sinsunggyeom">
          <a href="detail.php?place=sinsunggyeom">
          <img src="./img/photo18.jpg" alt="">
          <div class="overlay">
            <span class="place-name">신숭겸장군 유적지 <br>배롱나무</span></div>
          </a>
        </div>
        <div class="grid-item w-2 h-2" data-place="eworld">
          <a href="detail.php?place=eworld">
          <img src="./img/photo19.jpg" alt="">
          <div class="overlay">
            <span class="place-name">이월드 <br>벚꽃</span></div>
          </a>
        </div>
        <div class="grid-item w-1 h-1" data-place="house">
          <a href="detail.php?place=house">
          <img src="./img/photo20.jpg" alt="">
          <div class="overlay">
            <span class="place-name">경산 자인 적산가옥 <br>능소화</span></div>
          </a>
        </div>
        <div class="grid-item w-2 h-1" data-place="haebaragi">
          <a href="detail.php?place=haebaragi">
          <img src="./img/photo21.jpg" alt="">
          <div class="overlay">
            <span class="place-name">논공꽃단지 <br>9월 해바라기</span></div>
          </a>
        </div>
        <div class="grid-item w-1 h-1" data-place="nongong">
          <a href="detail.php?place=nongong">
          <img src="./img/photo22.jpg" alt="">
          <div class="overlay">
            <span class="place-name">논공꽃단지 <br>핑크뮬리</span></div>
          </a>
        </div>
        
      </div>
    </section>
  </div>

    <!-- 검색 결과를 보여주는 곳 -->
    <div class="result" id="result"></div>
    <?php include __DIR__ . '/footer.php'; ?>
   </body>
</html> 