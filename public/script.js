const resultItems = [
  { value: "120+", label: "누적 프로젝트" },
  { value: "98%", label: "고객 만족도" },
  { value: "24h", label: "초기 응답 기준" },
];

const strengthItems = [
  {
    title: "고급스러운 첫인상",
    body: "블랙골드 컬러와 넓은 여백으로 신뢰감 있는 브랜드 분위기를 만듭니다.",
  },
  {
    title: "빠른 수정 구조",
    body: "반복 콘텐츠를 배열로 분리해 담당자가 문구와 수치를 쉽게 교체할 수 있습니다.",
  },
  {
    title: "얇은 운영 구조",
    body: "정적 페이지 중심에 필요한 조회 API만 더하는 가벼운 Express 구성을 유지합니다.",
  },
];

const faqItems = [
  ["지금 문구는 확정본인가요?", "아니요. 첫 커밋용 기본 문구이며 담당자가 이후 상세하게 교체할 수 있습니다."],
  ["이미지는 꼭 필요한가요?", "현재는 별도 이미지 없이 CSS 임시 비주얼을 사용해 빠르게 커밋할 수 있게 구성했습니다."],
  ["데이터 연동도 가능한가요?", "가능합니다. 기존 구조처럼 /api/data와 별도 data 페이지를 유지했습니다."],
];

const escapeHtml = (value) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const resultList = document.querySelector("#result-list");
if (resultList) {
  resultList.innerHTML = resultItems
    .map(
      (item) => `
        <article class="result-card">
          <strong>${escapeHtml(item.value)}</strong>
          <span>${escapeHtml(item.label)}</span>
        </article>
      `,
    )
    .join("");
}

const strengthList = document.querySelector("#strength-list");
if (strengthList) {
  strengthList.innerHTML = strengthItems
    .map(
      (item, index) => `
        <article class="strength-card">
          <span class="card-number">${String(index + 1).padStart(2, "0")}</span>
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
