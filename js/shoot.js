document.addEventListener("DOMContentLoaded", function () {
  // 검색 함수
  function searchPlace() {
    console.log("검색 함수 실행됨"); // ✅ 확인용 로그
    const input = document.getElementById("searchInput").value.trim();
    const resultDiv = document.getElementById("result");
    const mainContent = document.getElementById("photo-Content");

    resultDiv.innerHTML = "";
    if (!input) {
      mainContent.style.display = "";
      resultDiv.innerHTML = "<p>검색어를 입력하세요.</p>";
      return;
    }

    mainContent.style.display = "none";
    const gridItems = document.querySelectorAll(".grid-item");
    const matched = [];

    gridItems.forEach((item) => {
      const placeName = item.querySelector(".place-name")?.textContent || "";
      if (placeName.includes(input)) {
        const place = placeName.split(" ")[0];
        const link = document.createElement("a");
        link.href = `photo-detail.html?place=${encodeURIComponent(place)}`;
        link.appendChild(item.cloneNode(true));
        matched.push(link);
      }
    });

    if (matched.length === 0) {
      resultDiv.innerHTML = "<p>검색 결과가 없습니다.</p>";
    } else {
      const container = document.createElement("div");
      container.className = "result-images";
      matched.forEach((node) => container.appendChild(node));
      resultDiv.appendChild(container);
    }
  }

  // 엔터 키 이벤트 리스너
  document.getElementById("searchInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      console.log("✅ Enter 키 눌림"); // ✅ 확인용 로그
      event.preventDefault();
      searchPlace();
    }
  });

  // 검색 버튼 이벤트 리스너
  document.querySelector(".search-btn").addEventListener("click", searchPlace);
});
