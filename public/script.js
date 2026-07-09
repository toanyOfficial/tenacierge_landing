const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const todayText = formatDate(new Date());
const escapeHtml = (value) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const IMAGE_SOURCES = {
  dashboard: "",
  settlement: "",
  cleanerReport: "",
  butlerTasks: "",
};

const resultMetrics = [
  { value: "120+", label: "운영 숙소", body: "여러 숙소의 일정과 청소 기록을 한 흐름으로 관리합니다." },
  { value: "98%", label: "보고 확인율", body: "완료 사진과 체크리스트를 남겨 확인 공백을 줄입니다." },
  { value: "60명", label: "상시 클리너 풀", body: "예약이 몰리는 날에도 배정 가능한 인력을 확보합니다." },
];

const laundryHighlight = {
  title: "직영 세탁공장 운영",
  body: "세탁, 수거, 특수오염처리까지 외부 조율 없이 이어집니다.",
};

const showcaseItems = [
  {
    key: "dashboard",
    title: "청소 현황 대시보드",
    caption: "숙소별 진행 상태를 한 화면에서 확인합니다.",
    instruction: "이 자리에 실시간 청소 현황 대시보드 캡처 이미지를 넣으세요",
    tooltip: "권장 비율 16:9 · 다수 숙소 상태가 보이는 화면 권장 · IMAGE_SOURCES.dashboard 경로만 교체하면 반영됩니다",
    bullets: ["숙소별 일정 확인", "진행 상태 표시", "완료 기록 확인"],
  },
  {
    key: "settlement",
    title: "호스트 정산 화면",
    caption: "숙소별 청소 건수와 비용을 투명하게 확인합니다.",
    instruction: "이 자리에 정산 화면 캡처 이미지를 넣으세요 (호스트명·빌딩명 마스킹 필수, 가장 비용 높은 케이스 기준)",
    tooltip: "권장 비율 4:3 · 호스트명·빌딩명 마스킹 필수 · IMAGE_SOURCES.settlement 경로만 교체하면 반영됩니다",
    bullets: ["숙소별 비용 확인", "청소 건수 집계", "월별 정산 내역"],
  },
  {
    key: "cleanerReport",
    title: "클리너 보고 화면",
    caption: "완료 사진과 체크리스트로 현장 기록을 남깁니다.",
    instruction: "이 자리에 클리너 보고 화면 캡처 이미지를 넣으세요 (체크리스트와 사진이 함께 보이는 화면 권장)",
    tooltip: "권장 비율 4:3 · 체크리스트와 사진 동시 노출 권장 · IMAGE_SOURCES.cleanerReport 경로만 교체하면 반영됩니다",
    bullets: ["항목별 체크리스트", "완료 사진 첨부", "특이사항 기록"],
  },
  {
    key: "butlerTasks",
    title: "업무 지시서 목록 화면",
    caption: "물품 준비부터 청소, 검수까지 업무 흐름을 정리합니다.",
    description: "여러 숙소의 업무가 겹쳐도 같은 기준으로 진행됩니다.",
    instruction: "이 자리에 버틀러 과업지시서 목록 캡처 이미지를 넣으세요 (배정·담당·청소·검수 단계가 섞인 화면 권장)",
    tooltip: "권장 비율 16:9 · 배정·담당·청소·검수 단계 혼합 화면 권장 · IMAGE_SOURCES.butlerTasks 경로만 교체하면 반영됩니다",
    bullets: ["담당자 배정", "업무 단계 관리", "검수 상태 확인"],
  },
];

const strengthItems = [
  { icon: "factory", title: "직영 세탁공장", proof: "세탁과 수거, 특수오염처리를 내부 공정으로 연결합니다.", effect: "침구와 수건 이슈를 별도 업체에 맡기지 않아도 됩니다." },
  { icon: "network", title: "7개 파트 운영 구조", proof: "데스크, 배달, 물품 준비, 세탁, 클리너, 관리감독, 수거팀이 역할을 나눕니다.", effect: "호스트는 여러 담당자를 따로 조율하지 않아도 됩니다." },
  { icon: "check", title: "3단계 교차검증", proof: "물품 준비, 청소, 검수 단계에서 서로 다른 기준으로 누락을 확인합니다.", effect: "체크인 전 실수를 줄이는 구조가 먼저 작동합니다." },
  { icon: "people", title: "60여 명 클리너 풀", proof: "상시 운영 가능한 클리너 풀을 유지합니다.", effect: "예약이 몰리는 날에도 배정 여력을 확보합니다." },
];

const strengthIcons = {
  factory: `<svg viewBox="0 0 48 48" focusable="false"><path d="M8 38h32"></path><path d="M10 38V22l9 5v-5l9 5v-9h10v20"></path><path d="M31 18V10h5v8"></path></svg>`,
  network: `<svg viewBox="0 0 48 48" focusable="false"><circle cx="14" cy="16" r="5"></circle><circle cx="34" cy="16" r="5"></circle><circle cx="24" cy="33" r="5"></circle><path d="M18.5 18.5 21.5 29"></path><path d="M29.5 18.5 26.5 29"></path><path d="M19 16h10"></path></svg>`,
  check: `<svg viewBox="0 0 48 48" focusable="false"><path d="M14 25 21 32 35 16"></path><rect x="9" y="9" width="30" height="30" rx="7"></rect></svg>`,
  people: `<svg viewBox="0 0 48 48" focusable="false"><circle cx="18" cy="17" r="5"></circle><circle cx="31" cy="18" r="4"></circle><path d="M9 37c1.8-7 15.2-7 18 0"></path><path d="M26 34c2.7-3.8 10.9-3.2 13 2"></path></svg>`,
};

const processSteps = ["운영 상담", "숙소 조건 확인", "청소·세탁 동선 설계", "운영 방식 확정"];

const faqItems = [
  ["여러 숙소를 동시에 맡길 수 있나요?", "가능합니다. 숙소별 일정, 청소 상태, 정산 내역을 분리해 관리합니다."],
  ["세탁도 함께 처리되나요?", "직영 세탁공장을 통해 침구와 수건 세탁, 수거, 특수오염처리까지 함께 운영합니다."],
  ["청소 완료는 어떻게 확인하나요?", "완료 사진과 체크리스트를 남깁니다. 다만 핵심은 사진보다 청소 전후의 운영 절차입니다."],
  ["요금은 어떻게 책정되나요?", "정액제와 건별제 중 선택 가능하며, 거리·물량·방 크기 등에 따라 달라집니다. 정확한 견적은 상담으로 안내드립니다."],
];

const resultList = document.querySelector("#result-list");
if (resultList) {
  resultList.innerHTML = `
    <section class="result-counter-panel" aria-labelledby="result-count-summary">
      <p id="result-count-summary" class="result-count-summary">${todayText} 현재까지 총 <span id="result-count-inline">0</span>건의 업무를 완료했습니다.</p>
      <strong id="live-cleaning-count" class="result-count-number" data-target="0">0</strong>
      <div class="result-badge-row">
        ${resultMetrics.map((item) => `<article class="result-badge"><strong>${escapeHtml(item.value)}</strong><span>${escapeHtml(item.label)}</span><p>${escapeHtml(item.body)}</p></article>`).join("")}
      </div>
    </section>
    <article class="laundry-highlight">
      <div class="laundry-icon" aria-hidden="true">
        <svg viewBox="0 0 48 48" focusable="false">
          <rect x="10" y="6" width="28" height="36" rx="5"></rect>
          <path d="M16 14h10"></path>
          <circle cx="31" cy="14" r="2"></circle>
          <circle cx="24" cy="28" r="9"></circle>
          <path d="M17 29c4 3 9 3 14 0"></path>
        </svg>
      </div>
      <div class="laundry-copy">
        <span>직영 후공정</span>
        <h3>${escapeHtml(laundryHighlight.title)}</h3>
        <p>${escapeHtml(laundryHighlight.body)}</p>
      </div>
    </article>
    <div class="strength-grid operations-grid">
      ${strengthItems.map((item) => `<article class="strength-card"><div class="strength-card-head"><span class="strength-icon" aria-hidden="true">${strengthIcons[item.icon] ?? ""}</span><h3>${escapeHtml(item.title)}</h3></div><div class="strength-card-body"><p><b>운영 근거</b>${escapeHtml(item.proof)}</p><p><b>호스트 입장</b>${escapeHtml(item.effect)}</p></div></article>`).join("")}
    </div>`;
}

const showcaseList = document.querySelector("#showcase-list");
if (showcaseList) {
  showcaseList.innerHTML = showcaseItems.map((item) => {
    const src = IMAGE_SOURCES[item.key];
    const visual = src
      ? `<img class="showcase-image" src="${escapeHtml(src)}" alt="${escapeHtml(item.title)} 캡처 이미지" />`
      : `<div class="showcase-image placeholder" role="img" tabindex="0" data-image-key="${escapeHtml(item.key)}" aria-label="${escapeHtml(item.title)} 캡처 이미지 placeholder — 교체 필요" data-tooltip="${escapeHtml(item.tooltip)}"><span aria-hidden="true">📷</span><strong>${escapeHtml(item.instruction)}</strong><small>${escapeHtml(item.tooltip)}</small></div>`;
    return `<article class="showcase-item reveal-on-scroll">${visual}<div class="showcase-copy"><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.caption)}</p>${item.description ? `<p class="showcase-description">${escapeHtml(item.description)}</p>` : ""}<ul>${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul></div></article>`;
  }).join("");
}

const processTimeline = document.querySelector("#process-timeline");
if (processTimeline) {
  processTimeline.innerHTML = processSteps.map((step, index) => `<article class="process-step"><span>${index + 1}</span><strong>${escapeHtml(step)}</strong></article>`).join("");
}

const faqList = document.querySelector("#faq-list");
if (faqList) {
  faqList.innerHTML = faqItems.map(([question, answer]) => `<details class="faq-item"><summary>${escapeHtml(question)}</summary><p>${escapeHtml(answer)}</p></details>`).join("");
}

const animateCount = (element, target) => {
  const duration = 1300;
  const startTime = performance.now();
  const step = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.round(target * eased).toLocaleString("ko-KR");
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const liveCount = document.querySelector("#live-cleaning-count");
const inlineCount = document.querySelector("#result-count-inline");
if (liveCount) {
  fetch("/api/data")
    .then((response) => {
      if (!response.ok) throw new Error("Failed to load live cleaning count");
      return response.json();
    })
    .then((data) => {
      const count = Number(data.totalCount ?? data.count ?? 0);
      if (!Number.isFinite(count)) throw new Error("Invalid count response");
      liveCount.dataset.target = String(count);
      if (inlineCount) inlineCount.textContent = count.toLocaleString("ko-KR");
      if (liveCount.dataset.animated) animateCount(liveCount, count);
    })
    .catch((error) => console.error(error));
}

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    if (entry.target.id === "results" && liveCount && !liveCount.dataset.animated) {
      liveCount.dataset.animated = "true";
      animateCount(liveCount, Number(liveCount.dataset.target || 0));
    }
    animationObserver.unobserve(entry.target);
  });
}, { threshold: 0.2 });

document.querySelectorAll("#results, .reveal-on-scroll, #process").forEach((item) => animationObserver.observe(item));
