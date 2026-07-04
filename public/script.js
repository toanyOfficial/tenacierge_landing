const landingImages = {
  heroMainImage: {
    label: "Hero 대표 이미지",
    alt: "Tenacierge 랜딩페이지 대표 그래픽",
  },
};

const productItems = [
  {
    title: "정적 랜딩 섹션",
    body: "HTML, CSS, 브라우저 스크립트만으로 주요 콘텐츠를 빠르게 노출합니다.",
    price: "빌드 도구 없음",
  },
  {
    title: "얇은 조회 API",
    body: "필요한 데이터만 MySQL SELECT 쿼리로 읽어 별도 페이지에 표시합니다.",
    price: "/api/* 라우트",
  },
  {
    title: "Caddy 배포 흐름",
    body: "앱은 내부 포트에서 실행하고 외부 도메인 라우팅은 Caddy가 담당합니다.",
    price: "reverse proxy",
  },
];

const caseItems = [
  {
    title: "서비스 소개 페이지",
    body: "대부분의 콘텐츠가 고정된 브랜드/상품 소개 페이지에 적합합니다.",
  },
  {
    title: "간단한 목록 조회",
    body: "메뉴, 지점, 공지처럼 복잡한 백엔드 없이 읽기만 필요한 화면에 적합합니다.",
  },
  {
    title: "빠른 서버 이관",
    body: "Bun 런타임과 Express 서버만 준비하면 동일한 구조로 복제할 수 있습니다.",
  },
];

const faqItems = [
  ["별도 프론트엔드 빌드가 필요한가요?", "아니요. public 디렉터리의 정적 파일을 Express가 그대로 제공합니다."],
  ["데이터 연동은 어떻게 하나요?", "mysql2/promise connection pool을 사용해 /api/data 같은 단순 조회 API로 제공합니다."],
  ["도메인 연결은 어디서 처리하나요?", "앱 코드가 아니라 Caddy reverse proxy 설정에서 처리합니다."],
];

const escapeHtml = (value) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const heroImageSlot = document.querySelector("#hero-image-slot");
if (heroImageSlot) {
  heroImageSlot.innerHTML = `
    <div class="hero-visual-card" role="img" aria-label="${escapeHtml(landingImages.heroMainImage.alt)}">
      <span>${escapeHtml(landingImages.heroMainImage.label)}</span>
      <strong>90% Static</strong>
      <small>10% SELECT API</small>
    </div>
  `;
}

const productList = document.querySelector("#product-list");
if (productList) {
  productList.innerHTML = productItems
    .map(
      (item) => `
        <article class="product-card">
          <span class="card-kicker">${escapeHtml(item.price)}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.body)}</p>
        </article>
      `,
    )
    .join("");
}

const caseList = document.querySelector("#case-list");
if (caseList) {
  caseList.innerHTML = caseItems
    .map(
      (item) => `
        <article class="case-card">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.body)}</p>
        </article>
      `,
    )
    .join("");
}

const faqList = document.querySelector("#faq-list");
if (faqList) {
  faqList.innerHTML = faqItems
    .map(
      ([question, answer]) => `
        <details class="faq-item">
          <summary>${escapeHtml(question)}</summary>
          <p>${escapeHtml(answer)}</p>
        </details>
      `,
    )
    .join("");
}

const observedSections = document.querySelectorAll("[data-observe-section]");
const navLinks = document.querySelectorAll(".nav-link[data-section]");

if (observedSections.length > 0 && navLinks.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      const activeEntry = entries.find((entry) => entry.isIntersecting);
      if (!activeEntry) return;

      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.dataset.section === activeEntry.target.id);
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 },
  );

  observedSections.forEach((section) => observer.observe(section));
}
