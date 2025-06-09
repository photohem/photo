// 헤더 스크롤 감지 & 클래스 토글
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// 언어 변환 스크립트
let currentLang = "ko"; // 현재 언어 상태
let translateReady = false; // 번역기 로드 여부

function googleTranslateElementInit() {
  // 번역 요소 초기화
  new google.translate.TranslateElement(
    {
      pageLanguage: "ko",
      includedLanguages: "en,ko", // 둘 다 명시
      autoDisplay: false,
    },
    "google_translate_element"
  );

  // 500ms 후 번역 요소 체크
  setTimeout(() => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      window.translateSelect = select;
      translateReady = true;
    } else {
      checkTranslateReady(); // 실패 시 기존 재시도 로직 실행
    }
  }, 500);
}

function checkTranslateReady() {
  // 여러 가지 선택자를 시도해 번역 요소를 찾음
  const select =
    document.querySelector(".goog-te-combo") ||
    document.querySelector(".skiptranslate select") ||
    document.querySelector("#google_translate_element select");

  if (select) {
    translateReady = true;
    console.log("✅ 번역 준비 완료", select);
    // 번역 요소를 찾았으므로 글로벌 변수로 저장
    window.translateSelect = select;
  } else {
    console.log("⏳ 번역 요소를 찾을 수 없음, 다시 시도합니다");
    // 1초 후 다시 시도
    setTimeout(checkTranslateReady, 1000);
  }
}

function toggleLang() {
  // 번역 요소 확인
  const select =
    window.translateSelect ||
    document.querySelector(".goog-te-combo") ||
    document.querySelector(".skiptranslate select") ||
    document.querySelector("#google_translate_element select");

  if (!select) {
    alert("번역 기능이 아직 준비되지 않았어요. 잠시만 기다려주세요.");
    // 번역 요소를 찾을 수 없을 때 다시 초기화 시도
    if (!translateReady) {
      checkTranslateReady();
    }
    return;
  }

  // 번역 실행
  try {
    if (currentLang === "ko") {
      select.value = "en";
      select.dispatchEvent(new Event("change"));
      setTimeout(() => select.dispatchEvent(new Event("change")), 50);
      document.getElementById("lang-toggle-btn").innerText = "한국어";
      currentLang = "en";
      localStorage.setItem("selectedLang", "en"); // 언어 저장
    } else {
      select.value = "ko";
      select.dispatchEvent(new Event("change"));
      setTimeout(() => select.dispatchEvent(new Event("change")), 50);
      document.getElementById("lang-toggle-btn").innerText = "English";
      currentLang = "ko";
      localStorage.setItem("selectedLang", "ko"); // 언어 저장
    }
  } catch (e) {
    console.error("번역 변경 중 오류 발생:", e);
    alert("번역 변경 중 오류가 발생했습니다.");
  }
}

// 페이지 로드 시 실행
window.addEventListener("DOMContentLoaded", function () {
  console.log("페이지 로드됨, 번역 준비 시작");
  document.getElementById("google_translate_element").style.display = "block";

  // [추가] 번역 요소가 준비될 때까지 대기
  const applySavedLanguage = () => {
    const savedLang = localStorage.getItem("selectedLang");
    if (!savedLang || savedLang === "ko") return; // ko면 번역하지 않음

    const select =
      document.querySelector(".goog-te-combo") || document.querySelector(".skiptranslate select");

    if (select) {
      select.value = savedLang;
      select.dispatchEvent(new Event("change"));
      setTimeout(() => select.dispatchEvent(new Event("change")), 50);
      currentLang = savedLang;
      document.getElementById("lang-toggle-btn").innerText =
        savedLang === "en" ? "한국어" : "English";
    } else {
      setTimeout(applySavedLanguage, 100); // 요소가 없으면 재시도
    }
  };

  // 최초 0.5초 후 실행 + 1초마다 재확인
  setTimeout(applySavedLanguage, 500);
  setInterval(applySavedLanguage, 1000);
});

// 페이지 로드 후 번역기 상태 확인
window.addEventListener("DOMContentLoaded", function () {
  console.log("페이지 로드됨, 번역 준비 시작");
  // 구글 번역 요소가 표시되도록 변경
  document.getElementById("google_translate_element").style.display = "block";
  // 번역 버튼 초기 상태 설정
  document.getElementById("lang-toggle-btn").innerText = "English";
});

// 구글 번역 드롭다운(google_translate_element)
function styleGoogleTranslateDropdown() {
  var $frame = $(".goog-te-menu-frame:visible");
  if (!$frame.length) {
    setTimeout(styleGoogleTranslateDropdown, 50);
    return;
  }

  var $body = $frame.contents().find("body");
  if (!$body.length) {
    setTimeout(styleGoogleTranslateDropdown, 50);
    return;
  }

  // 드롭다운 스타일 커스터마이징 강제 적용  (중요: !important 사용)
  var customStyle = `
    .goog-te-menu2 {
      background: #222 !important;
      border-radius: 12px !important;
      box-shadow: 0 8px 32px rgba(0,0,0,0.25) !important;
    }
    .goog-te-menu2-item div {
      color: #fff !important;
      padding: 18px 24px !important;
    }
    .goog-te-menu2-item:hover div {
      background: #4a90e2 !important;
    }
  `;

  var $frame = $(".goog-te-menu-frame:visible");
  var $body = $frame.contents().find("body");
  var styleId = "custom-gt-style-" + Math.random().toString(36).substr(2, 9);
  $body.append(`<style id="${styleId}">${customStyle}</style>`);
}

// 드롭다운 열릴 때마다 커스텀 스타일 적용 이벤트
$(document).on("click", "#google_translate_element, .goog-te-menu-frame", function () {
  setTimeout(styleGoogleTranslateDropdown, 300); // 0.3초 딜레이 추가
});

// 상단 번역 표시줄 숨기기
function hideGoogleTranslateBar() {
  const googleFrame = document.querySelector(".goog-te-banner-frame");
  if (googleFrame) {
    googleFrame.style.display = "none";
  }

  // body의 top 속성 초기화
  if (document.body.style.top !== "") {
    const top = parseInt(document.body.style.top, 10);
    document.body.style.top = "";
    window.scrollTo(0, Math.abs(top));
  }
}

// 번역 완료 후 이벤트 리스너 추가
function addTranslationCompleteListener() {
  if (window.MutationObserver) {
    const observer = new MutationObserver(function (mutations) {
      hideGoogleTranslateBar();
    });

    // body 또는 html의 class 변화 감시
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });
  }
}

// 페이지 로드 시 실행
window.addEventListener("DOMContentLoaded", function () {
  // 기존 코드는 그대로 유지하고 아래 코드 추가
  addTranslationCompleteListener();

  // 주기적으로 번역 표시줄 체크 및 숨기기
  setInterval(hideGoogleTranslateBar, 1000);
});

// 배너 즉시 숨김
function hideGoogleTranslateBar() {
  // 배너 iframe 숨기기
  var banner = document.querySelector(".goog-te-banner-frame");
  if (banner) {
    banner.style.display = "none";
    banner.style.visibility = "hidden";
    banner.style.height = "0";
    banner.style.border = "none";
    banner.style.position = "absolute";
    banner.style.zIndex = "-9999";
  }
  // body의 top 속성 제거
  if (document.body.style.top) {
    document.body.style.top = "";
  }
}

// 페이지 로드 후, 그리고 언어 변경 후에도 반복적으로 실행
window.addEventListener("DOMContentLoaded", hideGoogleTranslateBar);
setInterval(hideGoogleTranslateBar, 300); // 0.3초마다 체크 (더 자주!)

// 배너 즉시 숨김
if (window.MutationObserver) {
  const observer = new MutationObserver(function () {
    hideGoogleTranslateBar();
  });
  observer.observe(document.body, { childList: true, subtree: true });
}
