// 메인4 스토리

document.addEventListener("DOMContentLoaded", function () {
  const slide = document.querySelector(".custom-story");
  const slides = document.querySelectorAll(".custom-story .story");
  const prevBtn = document.querySelector(".story-nav .story_prev");
  const nextBtn = document.querySelector(".story-nav .story_next");
  const pageNums = document.querySelectorAll(".story-page-num");

  if (!slide || !slides.length || !prevBtn || !nextBtn) {
    console.error("필수 요소가 없습니다.");
    return;
  }

  const slidesPerView = 4; //화살표 이동 슬라이드 범위
  let currentPage = 0;
  const totalPages = Math.ceil(slides.length / slidesPerView);

  function updateSlide() {
    const firstSlideIndex = currentPage * slidesPerView;

    // 현재 페이지 첫 슬라이드 기준으로 offsetLeft 사용
    let offset = 0;
    if (slides[firstSlideIndex]) {
      offset = slides[firstSlideIndex].offsetLeft;

      // 첫 슬라이드인 경우만 margin-left 보정값 제거 (CSS에서 줬던 400px)
      if (firstSlideIndex === 0) {
        offset -= 400;
      }
    }

    slide.style.transition = "transform 0.3s ease-in-out";
    slide.style.transform = `translateX(-${offset}px)`;

    // 페이지 번호 상태
    pageNums.forEach((page, index) => {
      page.classList.toggle("active", index === currentPage);
    });

    // 버튼 숨김 제어
    prevBtn.classList.toggle("hide", currentPage === 0);
    nextBtn.classList.toggle("hide", currentPage >= totalPages - 1);
  }

  prevBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentPage > 0) {
      currentPage--;
      updateSlide();
    }
  });

  nextBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentPage < totalPages - 1) {
      currentPage++;
      updateSlide();
    }
  });

  pageNums.forEach((page, index) => {
    page.addEventListener("click", function () {
      currentPage = index;
      updateSlide();
    });
  });

  window.moveStorySlide = function (direction) {
    if (direction === "prev" && currentPage > 0) {
      currentPage--;
      updateSlide();
    } else if (direction === "next" && currentPage < totalPages - 1) {
      currentPage++;
      updateSlide();
    }
  };

  window.addEventListener("resize", updateSlide);

  setTimeout(() => {
    updateSlide();
    if (pageNums.length > totalPages) {
      for (let i = totalPages; i < pageNums.length; i++) {
        pageNums[i].style.display = "none";
      }
    }
  }, 100);
});
