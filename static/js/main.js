<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>카탈로그 대시보드</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Noto Sans KR', sans-serif; background-color: #f9f9f9; color: #333; }

    /* 메인 컨테이너 */
    .container { max-width: 1200px; margin: 0 auto; padding: 20px; }

    /* 로고 & 타이틀 영역 */
    .header { text-align: center; margin-bottom: 30px; }
    .header h1 { color: #8a6d8b; font-size: 28px; font-weight: normal; }

    /* 카테고리 필터 그리드 */
    .filter-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 10px;
      margin-bottom: 25px;
    }
    .filter-item {
      padding: 10px;
      border: 1px solid #e0e0e0;
      background: #fff;
      font-size: 13px;
      text-align: center;
      border-radius: 2px;
      cursor: pointer;
    }
    .filter-item select {
      width: 100%;
      border: none;
      outline: none;
      background: transparent;
      font-size: 13px;
    }

    /* 상단 컨트롤 바 (총 개수 & 정렬) */
    .control-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 15px;
      border-bottom: 1px solid #ddd;
      margin-bottom: 20px;
      font-size: 13px;
    }
    .total-count { font-weight: bold; color: #666; }
    .sort-options span { margin-left: 10px; color: #888; cursor: pointer; }
    .sort-options span.active { color: #000; font-weight: bold; }

    /* 카드 그리드 */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }
    .card {
      background: #fff;
      border: 1px solid #eee;
      border-radius: 4px;
      overflow: hidden;
    }
    .card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      display: block;
    }
    .card-content { padding: 15px; }
    .card-title { font-size: 14px; margin-bottom: 10px; color: #333; }
    .card-price { font-size: 14px; font-weight: bold; color: #3182ce; }

    /* 반응형 레이아웃 */
    @media (max-width: 900px) {
      .filter-grid { grid-template-columns: repeat(3, 1fr); }
      .card-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 600px) {
      .filter-grid { grid-template-columns: repeat(2, 1fr); }
      .card-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

  <div class="container">
    <!-- 헤더 -->
    <header class="header">
      <h1>대시보드 타이틀</h1>
    </header>

    <!-- 카테고리 필터 영역 -->
    <section class="filter-grid">
      <div class="filter-item">
        <select>
          <option>구피 / 소형어</option>
          <option>옵션 1</option>
        </select>
      </div>
      <div class="filter-item">테트라</div>
      <div class="filter-item">플래티/몰리</div>
      <div class="filter-item">엔젤/디스커스</div>
      <div class="filter-item">라미네지</div>
      <div class="filter-item">베타/구라미</div>
      <div class="filter-item">라스보라</div>
      <div class="filter-item">코리/프레코</div>
      <div class="filter-item">청소물고기</div>
      <div class="filter-item">중/대형어</div>
      <div class="filter-item">기타</div>
      <div class="filter-item">할인 코너</div>
    </section>

    <!-- 정렬 및 컨트롤 바 -->
    <div class="control-bar">
      <div class="total-count">Total 1,189 Items</div>
      <div class="sort-options">
        <span class="active">신상품</span>
        <span>상품명</span>
        <span>낮은가격</span>
        <span>높은가격</span>
      </div>
    </div>

    <!-- 카드 리스트 영역 -->
    <section class="card-grid">
      <div class="card">
        <img src="https://via.placeholder.com/300x200" alt="상품 이미지">
        <div class="card-content">
          <div class="card-title">불개미 테트라 / 1cm 내외 / 1마리</div>
          <div class="card-price">7,500 won</div>
        </div>
      </div>
      <div class="card">
        <img src="https://via.placeholder.com/300x200" alt="상품 이미지">
        <div class="card-content">
          <div class="card-title">체리레드 테트라 / 2cm 전후 / 1마리</div>
          <div class="card-price">5,500 won</div>
        </div>
      </div>
      <div class="card">
        <img src="https://via.placeholder.com/300x200" alt="상품 이미지">
        <div class="card-content">
          <div class="card-title">레드테일 펭귄 테트라 / 2-3cm 전후</div>
          <div class="card-price">6,800 won</div>
        </div>
      </div>
      <div class="card">
        <img src="https://via.placeholder.com/300x200" alt="상품 이미지">
        <div class="card-content">
          <div class="card-title">샤페 테트라 / 2-3cm 전후 / 10마리</div>
          <div class="card-price">8,000 won</div>
        </div>
      </div>
    </section>
  </div>

</body>
</html>