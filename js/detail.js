// 장소 데이터를 정의합니다 (실제 사용 시에는 서버에서 가져오거나 별도 파일로 분리하는 것이 좋습니다)
const placeData = {
  "83tower": {
    id: "83tower",
    title: "83타워",
    description: "대구의 랜드마크로 도시 전체를 한눈에 볼 수 있는 전망대입니다.",
    image: ["./img/photo1-1.jpg", "./img/photo1-2.jpg", "./img/photo1.jpg"],
    tip: "전망대에서 대구 도시 전경을 파노라마로 촬영해보세요. 맑은 날에는 도시와 주변 산맥이 모두 보입니다.",
    travel: "주차장 이용 가능, 지하철 3호선 두류역에서 셔틀버스 운행",
    type: "전망대, 도시 경관",
    time: "일몰 직전과 야간",
    sun: "일출 시간: 05:30~07:00, 일몰 시간: 17:30~19:30",
    theme: "도시 전경, 야경, 데이트",
    location: "대구광역시 달서구 두류공원로 200",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.838926376926!2d128.55126797654458!3d35.89788847357155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e16f7e876267%3A0xe06090aaef61959!2z64yA6rWs83DtirjsnoXri4g!5e0!3m2!1sko!2skr!4v1714465020633!5m2!1sko!2skr",
  },
  arboretum: {
    id: "arboretum",
    title: "대구수목원",
    description: "다양한 식물들이 가득한 도시 속 힐링 공간.",
    image: ["./img/photo2-1.jpg", "./img/photo2-2.jpg", "./img/photo2.jpg"],
    tip: "선인장 온실과 연못 주변이 사진 명소입니다. 봄에는 다양한 꽃, 가을에는 단풍도 감상할 수 있어요.",
    travel: "무료 주차 가능. 대중교통은 지하철 1호선 대곡역에서 도보 약 15분 소요.",
    type: "수목원, 자연학습원",
    time: "오전 9시~오후 6시 (동절기 5시까지)",
    sun: "일몰 시간: 계절에 따라 17:30~19:30",
    theme: "자연, 식물, 가족, 산책",
    location: "대구광역시 달서구 화암로 342",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.028889413271!2d128.528075!3d35.819939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e2e6e1e1e1e1%3A0x1c1c1c1c1c1c1c1c!2z64yA6rWs7Iqk7Yq47JWE7J207Yuw!5e0!3m2!1sko!2skr!4v1714464996761!5m2!1sko!2skr",
  },

  "80san": {
    id: "80san",
    title: "팔공산",
    description: "대구의 상징적인 산, 등산과 단풍 명소로 유명합니다.",
    image: ["./img/photo3-1.jpg", "./img/photo3-2.jpg", "./img/photo3.jpg"],
    tip: "케이블카를 타고 정상에 오르면 대구 시내와 산세가 한눈에 펼쳐집니다. 가을 단풍, 봄 진달래 시즌에 특히 아름답습니다.",
    travel:
      "케이블카 주차장, 대중교통은 동대구역에서 401번 버스 이용 가능. 케이블카 왕복 11,000원.",
    type: "산, 자연, 등산",
    time: "오전 9시~일몰 (케이블카 기준, 월요일 휴무)",
    sun: "일출·일몰 모두 아름다움. 일몰 시간: 17:30~19:30",
    theme: "등산, 풍경, 단풍, 가족",
    location: "대구광역시 동구 팔공산로 185길 51",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.028889413271!2d128.690075!3d35.868939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e2e6e1e1e1e1%3A0x2c2c2c2c2c2c2c2c!2z7J2867O07JWE7J207Yuw!5e0!3m2!1sko!2skr!4v1714464996761!5m2!1sko!2skr",
  },

  theARC: {
    id: "theARC",
    title: "강정고령보 디아크",
    description: "대구의 현대적 건축물과 강변 산책로가 매력적인 장소.",
    image: ["./img/photo4-1.jpg", "./img/photo4-2.jpg", "./img/photo4.jpg"],
    tip: "디아크 외관과 낙동강 전망, 자전거 산책로에서 이색적인 사진을 남겨보세요.",
    travel: "무료 주차장, 대중교통은 다사역에서 650번 버스 환승 후 도보 10분.",
    type: "현대건축, 문화공간, 강변",
    time: "야외는 상시, 전시관 10:00~18:00 (월요일 휴관)",
    sun: "일몰 무렵 강변 풍경이 특히 아름답습니다.",
    theme: "현대건축, 강, 산책, 사진",
    location: "대구광역시 달성군 다사읍 강정본길 57",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.028889413271!2d128.486075!3d35.866939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e2e6e1e1e1e1%3A0x3c3c3c3c3c3c3c3c!2z64yA6rWs7Iqk7Yq47JWE7J207Yuw!5e0!3m2!1sko!2skr!4v1714464996761!5m2!1sko!2skr",
  },

  biseulsan: {
    id: "biseulsan",
    title: "비슬산",
    description: "참꽃으로 유명한 아름다운 산입니다.",
    image: ["./img/photo5-1.jpg", "./img/photo5-2.jpg", "./img/photo5.jpg"],
    tip: "4~5월 참꽃 군락지에서 분홍빛 꽃길을 배경으로 인생샷을 남겨보세요. 대견사와 정상 파노라마 뷰도 추천.",
    travel: "비슬산 자연휴양림 주차장 이용, 대중교통은 대곡역에서 600번 버스 환승.",
    type: "산, 자연, 등산",
    time: "상시 개방, 봄철 참꽃 시즌(4~5월) 추천",
    sun: "일출·일몰 모두 아름다움. 일출 시간: 계절에 따라 05:30~07:00",
    theme: "등산, 꽃, 풍경, 힐링",
    location: "대구광역시 달성군 유가읍 양리 산 1-1",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.028889413271!2d128.507075!3d35.742939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e2e6e1e1e1e1%3A0x4c4c4c4c4c4c4c4c!2z67aA7JWE7J207Yuw!5e0!3m2!1sko!2skr!4v1714464996761!5m2!1sko!2skr",
  },

  suseong: {
    id: "suseong",
    title: "수성못",
    description: "야경과 산책로가 아름다운 대구 도심의 호수.",
    image: ["./img/photo6-1.jpg", "./img/photo6-2.jpg", "./img/photo6.jpg"],
    tip: "호수 주변 산책로와 포토 스팟, 야경이 아름답습니다. 카페거리도 인기가 많아요.",
    travel: "무료 주차장, 대중교통은 수성못역에서 도보 10분.",
    type: "호수, 산책, 야경",
    time: "상시 개방, 야경은 일몰 후 추천",
    sun: "일몰 시간: 17:30~19:30",
    theme: "산책, 야경, 데이트, 가족",
    location: "대구광역시 수성구 두산동 512",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.028889413271!2d128.629075!3d35.836939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e2e6e1e1e1e1%3A0x5c5c5c5c5c5c5c5c!2z7ISc7JWE7J207Yuw!5e0!3m2!1sko!2skr!4v1714464996761!5m2!1sko!2skr",
  },

  songhae: {
    id: "songhae",
    title: "송해공원",
    description: "자연과 조각 공원이 어우러진 휴식 공간.",
    image: ["./img/photo7-1.jpg", "./img/photo7-2.jpg", "./img/photo7.jpg"],
    tip: "옥연지 둘레길과 백세교, 노을 명소, 다양한 포토존에서 인생샷을 남겨보세요.",
    travel: "무료 주차장, 대중교통은 대곡역에서 600번 버스 환승.",
    type: "공원, 호수, 산책",
    time: "상시 개방, 야간 조명 분수는 일몰 후 운영",
    sun: "일몰 시간: 17:30~19:30",
    theme: "산책, 조각, 노을, 가족, 데이트",
    location: "대구광역시 달성군 옥포읍 옥연지로 148",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.028889413271!2d128.482075!3d35.784939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e2e6e1e1e1e1%3A0x6c6c6c6c6c6c6c6c!2z7JWE7J2067aA7JWE7J207Yuw!5e0!3m2!1sko!2skr!4v1714464996761!5m2!1sko!2skr",
  },

  leesanghwa: {
    id: "leesanghwa",
    title: "시인 이상화 고택",
    description: "이상화 시인의 정신을 느낄 수 있는 고택과 전시공간.",
    image: ["./img/photo8-1.jpg", "./img/photo8-2.jpg", "./img/photo8.jpg"],
    tip: "고택의 전통미와 전시관, 시인의 유품을 감상할 수 있습니다.",
    travel: "무료 관람, 대구역 또는 중앙로역에서 도보 10분.",
    type: "역사, 문화유산, 고택",
    time: "오전 10시~오후 5시 30분 (월요일 휴관)",
    sun: "실내 관람, 실외는 자연광 촬영 가능",
    theme: "역사, 문학, 전통, 교육",
    location: "대구광역시 중구 계산동2가 84-1",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.028889413271!2d128.606075!3d35.869939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e2e6e1e1e1e1%3A0x7c7c7c7c7c7c7c7c!2z7JWE7J2067aA7JWE7J207Yuw!5e0!3m2!1sko!2skr!4v1714464996761!5m2!1sko!2skr",
  },

  dalseong_toseong: {
    id: "dalseong_toseong",
    title: "달성토성",
    description: "고대의 흔적이 남아 있는 역사적인 성터.",
    image: ["./img/photo9-1.jpg", "./img/photo9-2.jpg", "./img/photo9.jpg"],
    tip: "토성 주변 산책로와 골목정원, 벽화가 사진 명소입니다.",
    travel: "근처 공영주차장, 대중교통은 대구역에서 300번 버스 환승.",
    type: "역사, 성터, 산책",
    time: "상시 개방",
    sun: "일출·일몰 모두 아름다움",
    theme: "역사, 산책, 사진, 데이트",
    location: "대구광역시 중구 달성동 6-1",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.028889413271!2d128.594075!3d35.868939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e2e6e1e1e1e1%3A0x8c8c8c8c8c8c8c8c!2z7JWE7J2067aA7JWE7J207Yuw!5e0!3m2!1sko!2skr!4v1714464996761!5m2!1sko!2skr",
  },

  chimsan: {
    id: "chimsan",
    title: "침산공원",
    description: "벚꽃이 흐드러지는 봄철 인기 산책 코스.",
    image: ["./img/photo10-1.jpg", "./img/photo10-2.jpg", "./img/photo10.jpg"],
    tip: "벚꽃 시즌(3~4월)에 방문하면 꽃길 산책과 사진 촬영에 최적입니다.",
    travel: "무료 주차장, 대중교통은 침산역에서 도보 10분.",
    type: "공원, 산책, 벚꽃",
    time: "상시 개방, 벚꽃 시즌 추천",
    sun: "낮/일몰 모두 아름다움",
    theme: "산책, 벚꽃, 가족, 데이트",
    location: "대구광역시 북구 침산동 229-1",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.028889413271!2d128.583075!3d35.884939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e2e6e1e1e1e1%3A0x9c9c9c9c9c9c9c9c!2z7JWE7J2067aA7JWE7J207Yuw!5e0!3m2!1sko!2skr!4v1714464996761!5m2!1sko!2skr",
  },

  munssi: {
    id: "munssi",
    title: "남평문씨 본리세거지",
    description: "6월에는 능소화가 만발하는 아름다운 고택 거리.",
    image: ["./img/photo11-1.jpg", "./img/photo11-2.jpg", "./img/photo11.jpg"],
    tip: "전통 한옥과 능소화, 매화, 흙담 등 고풍스러운 골목에서 사진을 남겨보세요.",
    travel: "무료 주차장, 대중교통은 화원역에서 600번 버스 환승.",
    type: "전통마을, 고택, 꽃길",
    time: "상시 개방, 6월 능소화 시즌 추천",
    sun: "낮 시간대 자연광 촬영 추천",
    theme: "전통, 꽃, 산책, 사진",
    location: "대구광역시 달성군 화원읍 본리리 401-2",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.028889413271!2d128.495075!3d35.812939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e2e6e1e1e1e1%3A0x10c10c10c10c10c1!2z7JWE7J2067aA7JWE7J207Yuw!5e0!3m2!1sko!2skr!4v1714464996761!5m2!1sko!2skr",
  },

  catholic: {
    id: "catholic",
    title: "계산성당",
    description: "대구 근대 건축의 대표적 성당.",
    image: ["./img/photo12-1.jpg", "./img/photo12-2.jpg", "./img/photo12.jpg"],
    tip: "고딕 양식의 외관과 스테인드글라스, 내부 관람(미사 없는 시간) 추천.",
    travel: "무료 관람, 대구역 또는 중앙로역에서 도보 10분.",
    type: "성당, 근대건축, 문화유산",
    time: "상시 개방, 미사 시간 외 내부 관람 가능",
    sun: "낮 시간대 자연광 촬영 추천",
    theme: "역사, 건축, 종교, 사진",
    location: "대구광역시 중구 계산동2가 71",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.028889413271!2d128.606075!3d35.869939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e2e6e1e1e1e1%3A0x11c11c11c11c11c1!2z7JWE7J2067aA7JWE7J207Yuw!5e0!3m2!1sko!2skr!4v1714464996761!5m2!1sko!2skr",
  },

  dongchon: {
    id: "dongchon",
    title: "동촌유원지",
    description: "개나리와 벚꽃이 아름다운 강변 유원지.",
    image: ["./img/photo13-1.jpg", "./img/photo13-2.jpg", "./img/photo13.jpg"],
    tip: "봄철 벚꽃, 개나리, 강변 산책로와 자전거길에서 사진 촬영 추천.",
    travel: "무료 주차장, 대중교통은 아양교역에서 도보 10분.",
    type: "유원지, 강변, 산책",
    time: "상시 개방, 봄철 추천",
    sun: "일출·일몰 모두 아름다움",
    theme: "자연, 산책, 가족, 사진",
    location: "대구광역시 동구 효목동 513",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.028889413271!2d128.635075!3d35.885939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e2e6e1e1e1e1%3A0x12c12c12c12c12c1!2z7JWE7J2067aA7JWE7J207Yuw!5e0!3m2!1sko!2skr!4v1714464996761!5m2!1sko!2skr",
  },

  dalseong_wetland: {
    id: "dalseong_wetland",
    title: "달성습지",
    description: "생태가 살아 있는 자연 습지.",
    image: ["./img/photo14-1.jpg", "./img/photo14-2.jpg", "./img/photo14.jpg"],
    tip: "탐방로와 생태학습관, 습지의 다양한 새와 식물을 관찰할 수 있습니다.",
    travel: "무료 주차장, 대중교통은 화원역에서 600번 버스 환승.",
    type: "습지, 생태, 산책",
    time: "상시 개방, 생태학습관 09:00~18:00",
    sun: "일출·일몰 모두 아름다움",
    theme: "생태, 자연, 산책, 교육",
    location: "대구광역시 달성군 화원읍 구라리 799",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.028889413271!2d128.502075!3d35.808939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e2e6e1e1e1e1%3A0x13c13c13c13c13c1!2z7JWE7J2067aA7JWE7J207Yuw!5e0!3m2!1sko!2skr!4v1714464996761!5m2!1sko!2skr",
  },

  hajungdo: {
    id: "hajungdo",
    title: "금호꽃섬 하중도",
    description: "봄에는 유채꽃, 가을에는 코스모스가 가득한 꽃섬.",
    image: ["./img/photo15-1.jpg", "./img/photo15-2.jpg", "./img/photo15.jpg"],
    tip: "노곡교 인근에서 진입, 꽃밭 사이 산책로와 하트 포토존, 억새밭에서 사진 촬영 추천.",
    travel: "무료 주차장, 대중교통은 3호선 연계 보도교 이용.",
    type: "꽃섬, 산책, 자연",
    time: "상시 개방, 유채꽃(4~5월), 코스모스(9~10월)",
    sun: "낮 시간대 자연광 촬영 추천",
    theme: "꽃, 산책, 사진, 가족",
    location: "대구광역시 북구 노곡동 987-1",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.028889413271!2d128.553075!3d35.902939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e2e6e1e1e1e1%3A0x14c14c14c14c14c1!2z7JWE7J2067aA7JWE7J207Yuw!5e0!3m2!1sko!2skr!4v1714464996761!5m2!1sko!2skr",
  },

  ihyeon: {
    id: "ihyeon",
    title: "이현공원",
    description: "샤스테이데이지가 피어나는 봄의 정원 같은 공원.",
    image: ["./img/photo16-1.jpg", "./img/photo16-2.jpg", "./img/photo16.jpg"],
    tip: "잔디광장과 수국, 샤스테이데이지 등 다양한 꽃밭에서 사진 촬영 추천.",
    travel: "무료 주차장, 대중교통은 서구청역에서 도보 15분.",
    type: "공원, 꽃, 산책",
    time: "상시 개방, 봄철 추천",
    sun: "낮 시간대 자연광 촬영 추천",
    theme: "꽃, 산책, 가족, 사진",
    location: "대구광역시 서구 이현동 1200",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.028889413271!2d128.543075!3d35.858939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e2e6e1e1e1e1%3A0x15c15c15c15c15c1!2z7JWE7J2067aA7JWE7J207Yuw!5e0!3m2!1sko!2skr!4v1714464996761!5m2!1sko!2skr",
  },

  campsis: {
    id: "campsis",
    title: "능소화폭포 (대봉동)",
    description: "한여름 능소화가 폭포처럼 흘러내리는 포토존.",
    image: ["./img/photo17-1.jpg", "./img/photo17-2.jpg", "./img/photo17.jpg"],
    tip: "7월 능소화 만개 시기, 대봉1동 행정복지센터 벽면과 인근 골목에서 사진 촬영 추천.",
    travel: "지하철 2호선 경대병원역에서 도보 5분.",
    type: "도심 포토존, 꽃길",
    time: "상시 개방, 7월 능소화 시즌 추천",
    sun: "낮 시간대 자연광 촬영 추천",
    theme: "꽃, 사진, 도심, 산책",
    location: "대구광역시 중구 대봉동 209-2",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.028889413271!2d128.604075!3d35.859939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e2e6e1e1e1e1%3A0x16c16c16c16c16c1!2z7JWE7J2067aA7JWE7J207Yuw!5e0!3m2!1sko!2skr!4v1714464996761!5m2!1sko!2skr",
  },

  sinsunggyeom: {
    id: "sinsunggyeom",
    title: "신숭겸장군 유적지",
    description: "배롱나무가 아름다운 유적지 산책 공간.",
    image: ["./img/photo18-1.jpg", "./img/photo18-2.jpg", "./img/photo18.jpg"],
    tip: "여름철 배롱나무 꽃이 만개할 때 방문하면 아름다운 사진을 남길 수 있습니다.",
    travel: "무료 주차장, 대중교통은 현풍역에서 600번 버스 환승.",
    type: "유적지, 산책, 꽃길",
    time: "상시 개방, 여름철 추천",
    sun: "낮 시간대 자연광 촬영 추천",
    theme: "역사, 꽃, 산책, 교육",
    location: "대구광역시 달성군 현풍면 성하리 1",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.028889413271!2d128.495075!3d35.712939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e2e6e1e1e1e1%3A0x17c17c17c17c17c1!2z7JWE7J2067aA7JWE7J207Yuw!5e0!3m2!1sko!2skr!4v1714464996761!5m2!1sko!2skr",
  },

  house: {
    id: "house",
    title: "경산 자인 적산가옥",
    description: "능소화와 함께하는 고풍스런 일본식 건축물.",
    image: ["./img/photo20-1.jpg", "./img/photo20-2.jpg", "./img/photo20.jpg"],
    tip: "여름 능소화 만개 시기, 일본식 건축과 꽃의 조화를 사진에 담아보세요.",
    travel: "주차장 완비, 대중교통은 자인역에서 도보 20분.",
    type: "전통가옥, 근대건축, 꽃길",
    time: "상시 개방, 여름철 추천",
    sun: "낮 시간대 자연광 촬영 추천",
    theme: "근대건축, 꽃, 사진, 산책",
    location: "경상북도 경산시 자인면 북사리 133-1",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.028889413271!2d128.821075!3d35.822939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e2e6e1e1e1e1%3A0x18c18c18c18c18c1!2z7JWE7J2067aA7JWE7J207Yuw!5e0!3m2!1sko!2skr!4v1714464996761!5m2!1sko!2skr",
  },

  haebaragi: {
    id: "haebaragi",
    title: "논공꽃단지 9월 해바라기",
    description: "해바라기가 만개한 꽃밭.",
    image: ["./img/photo21-1.jpg", "./img/photo21-2.jpg", "./img/photo21.jpg"],
    tip: "9월 해바라기 만개 시기에 방문하면 노란 꽃밭에서 인생샷을 남길 수 있습니다.",
    travel: "무료 주차장, 대중교통은 논공역에서 도보 20분.",
    type: "꽃밭, 자연, 산책",
    time: "상시 개방, 9월 해바라기 시즌 추천",
    sun: "낮 시간대 자연광 촬영 추천",
    theme: "꽃, 사진, 산책, 가족",
    location: "대구광역시 달성군 논공읍 금포리 1046",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.028889413271!2d128.486075!3d35.733939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e2e6e1e1e1e1%3A0x19c19c19c19c19c1!2z7JWE7J2067aA7JWE7J207Yuw!5e0!3m2!1sko!2skr!4v1714464996761!5m2!1sko!2skr",
  },

  nongong: {
    id: "nongong",
    title: "논공꽃단지 핑크뮬리",
    description: "핑크뮬리가 흐드러지는 꽃밭.",
    image: ["./img/photo22.jpg", "./img/photo22-1.jpg", "./img/photo22-2.jpg"],
    tip: "10월 핑크뮬리 만개 시기에 방문하면 핑크빛 꽃밭에서 감성 사진을 남길 수 있습니다.",
    travel: "무료 주차장, 대중교통은 논공역에서 도보 20분.",
    type: "꽃밭, 자연, 산책",
    time: "상시 개방, 10월 핑크뮬리 시즌 추천",
    sun: "낮 시간대 자연광 촬영 추천",
    theme: "꽃, 사진, 산책, 가족",
    location: "대구광역시 달성군 논공읍 금포리 1046",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.028889413271!2d128.486075!3d35.733939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e2e6e1e1e1e1%3A0x20c20c20c20c20c1!2z7JWE7J2067aA7JWE7J207Yuw!5e0!3m2!1sko!2skr!4v1714464996761!5m2!1sko!2skr",
  },

  eworld: {
    id: "eworld",
    title: "이월드",
    description:
      "대구의 대표적인 테마파크로 83타워와 함께 있어 낮과 밤 모두 아름다운 풍경을 자랑합니다. 다양한 놀이기구와 계절별 축제, 야경이 유명한 곳입니다.",
    image: ["./img/photo24.jpg", "./img/photo24-1.jpg", "./img/photo24-2.jpg"],
    tip: "야간 개장 시간에 방문하면 화려한 일루미네이션과 83타워의 야경을 함께 촬영할 수 있습니다. 벚꽃 시즌과 크리스마스 시즌이 특히 인기가 많습니다.",
    travel: "지하철 2호선 두류역 15번 출구에서 도보 15분, 버스 이용 가능",
    type: "테마파크, 놀이공원, 야경",
    time: "평일 10:00-21:00, 주말 10:00-22:00 (계절별 변동)",
    sun: "일몰 후 1시간 (야경 촬영)",
    theme: "야경 촬영, 일루미네이션, 가족 나들이",
    location: "대구광역시 달서구 두류공원로 200",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.4509!2d128.5657!3d35.8136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e10a9a9a9a9a%3A0x5a5a5a5a5a5a5a5a!2s%EC%9D%B4%EC%9B%94%EB%93%9C!5e0!3m2!1sko!2skr!4v1714464996761!5m2!1sko!2skr",
  },

  kim_street: {
    id: "kim_street",
    title: "김광석 길",
    description:
      "김광석의 삶과 음악을 테마로 조성된 문화예술거리입니다. 벽화와 조형물, 공연장이 어우러진 대구의 대표적인 문화관광지입니다.",
    image: ["./img/photo25.jpg", "./img/photo25-1.jpg", "./img/photo25-2.jpg"],
    tip: "평일 오후나 이른 아침에 방문하면 한적하게 촬영할 수 있습니다. 야간에는 조명이 켜져 또 다른 분위기를 연출합니다.",
    travel: "지하철 2호선 경대병원역 3번 출구에서 도보 10분",
    type: "문화, 예술, 거리",
    time: "24시간 개방 (상점은 10:00-22:00)",
    sun: "오후 3-5시 (따뜻한 빛)",
    theme: "벽화 촬영, 인물 사진, 감성 사진",
    location: "대구광역시 중구 대봉동",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.7!2d128.6067!3d35.8594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e3e3e3e3e3e3%3A0x3e3e3e3e3e3e3e3e!2s%EA%B9%80%EA%B4%91%EC%84%9D%EB%8B%A4%EC%8B%9C%EA%B7%B8%EB%A6%AC%EA%B8%B0%EA%B8%B8!5e0!3m2!1sko!2skr!4v1714464996761!5m2!1sko!2skr",
  },

  samunjin: {
    id: "samunjin",
    title: "사문진나루터",
    description:
      "낙동강변에 위치한 역사적인 나루터로, 멋진 일몰과 강변 풍경을 감상할 수 있는 곳입니다. 주말엔 버스킹 공연도 열립니다.",
    image: ["./img/photo26.jpg", "./img/photo26-1.jpg", "./img/photo26-2.jpg"],
    tip: "일몰 30분 전부터 대기하면 환상적인 석양 사진을 촬영할 수 있습니다. 삼각대를 준비하면 장노출 촬영도 가능합니다.",
    travel: "자가용 이용 권장, 대중교통은 불편함",
    type: "자연, 강, 일몰",
    time: "24시간 개방",
    sun: "일몰 30분 전-일몰 후 30분",
    theme: "일몰 촬영, 강 풍경, 장노출 사진",
    location: "대구광역시 달성군 화원읍 사문진로 1",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.8!2d128.4886!3d35.8169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e1c8c8c8c8c8%3A0x8c8c8c8c8c8c8c8c!2s%EC%82%AC%EB%AC%B8%EC%A7%84%EB%82%98%EB%A3%A8%ED%84%B0!5e0!3m2!1sko!2skr!4v1714464996761!5m2!1sko!2skr",
  },
};

// 슬라이더 초기화 문제를 위한 체크 함수
function checkBxSliderLoaded() {
  if (typeof $.fn.bxSlider === "undefined") {
    console.error("bxSlider가 로드되지 않았습니다. 라이브러리를 확인해주세요.");
    return false;
  }
  return true;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("all-place-container");
  let contentHTML = "";
  const urlParams = new URLSearchParams(window.location.search);
  const placeId = urlParams.get("place");

  if (placeId && placeData[placeId]) {
    const data = placeData[placeId];
    contentHTML = `
      <div class="place-detail-box">
        <div class="slider-wrapper">
          <ul class="image-slider">
            ${data.image
              .map((img) => `<li><img src="${img}" alt="${data.title} 이미지" /></li>`)
              .join("")}
          </ul>
        </div>

        <div class="description-section">
          <div class="place-description">
            <h1 class="place-title">${data.title}</h1>
            <p class="place-desc">${data.description}</p>

            <div class="photo-tip">
              <h3>📸 촬영 팁</h3>
              <p>${data.tip}</p>
              <br />
              <h3>🎯 여행 정보</h3>
              <p>${data.travel}</p>
            </div>
          </div>

          <div class="photo-info">
            <div class="info-item"> 
              <span class="icon">🛩️</span>
              <span class="title">스팟 유형 | <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span class="desc">${data.type}</span>
            </div>
            <div class="info-item">
              <span class="icon">⏱️</span>
              <span class="title">가장 좋은 타이밍 | <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span class="desc">${data.time}</span>
            </div>
            <div class="info-item">
              <span class="icon">🌅</span>
              <span class="title">일출 및 일몰 | <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span class="desc">${data.sun}</span>
            </div>
            <div class="info-item">
              <span class="icon">📸</span>
              <span class="title">사진 테마 | <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span class="desc">${data.theme}</span>
            </div>
            <div class="info-item">
              <span class="icon">📍</span>
              <span class="title">위치 | <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span class="desc location">${data.location}</span>
            </div>
          </div>
        </div>

        <div class="map-section">
          <iframe
            src="${data.map}"
            width="100%"
            height="400"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    `;
  }

  // innerHTML 할당은 마지막에 단 한 번
  container.innerHTML = contentHTML;

  // BxSlider 즉시 초기화

  if (!checkBxSliderLoaded()) {
    console.error("bxSlider 라이브러리가 로드되지 않았습니다.");
  } else {
    var slider = $(".image-slider").bxSlider({
      mode: "horizontal", // 수평 슬라이드 모드로 변경
      speed: 800, // 전환 속도
      auto: true, // 자동 슬라이드 ON
      pause: 3000, // 슬라이드 간 정지 시간 (4초)
      autoControls: false, // 재생/정지 버튼 표시
      stopAutoOnClick: true, // 수동 조작 시 자동 재생 정지
      infiniteLoop: true, // 무한 반복
      touchEnabled: true, // 터치 스와이프 활성화
      pager: false, // 하단 페이징 표시
      controls: true, // 좌우 화살표 표시 (필수)
      adaptiveHeight: false, // 고정 높이
      slideWidth: 1100, // 슬라이드 너비 설정
      minSlides: 1, // 최소 슬라이드 수
      maxSlides: 1, // 최대 슬라이드 수
      moveSlides: 1, // 이동 슬라이드 수
      slideMargin: 0, // 슬라이드 간 여백
      captions: false, // 캡션 비활성화
      nextText: '<i class="arrow-next">→</i>', // 다음 버튼 커스텀 텍스트
      prevText: '<i class="arrow-prev">←</i>', // 이전 버튼 커스텀 텍스트
    });

    // 슬라이더가 로드되지 않았을 경우 수동으로 다시 초기화
    if (!$(".bx-controls").length) {
      setTimeout(function () {
        slider.reloadSlider();
      }, 500);
    }
  }
});
