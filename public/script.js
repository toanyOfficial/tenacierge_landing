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

const resultItems = [
  {
    type: "counter",
    value: "0",
    label: `시스템 도입 이후 ${todayText} 현재까지 실시간 누적 청소`,
    before: "시스템 도입 이전 누적 청소 0,000건",
  },
  { value: "120+", label: "누적 운영 숙소", body: "여러 채널 예약이 겹쳐도 숙소별 일정 확인 부담을 줄입니다." },
  { value: "98%", label: "완료 보고 확인율", body: "현장에 없어도 사진과 체크리스트로 청소 상태를 확인합니다." },
  { value: "24h", label: "긴급 일정 대응 기준", body: "체크아웃-체크인 텀이 짧아도 배정 흐름을 빠르게 맞춥니다." },
  { value: "후공정", label: "세탁실 · 세탁공장 · 특수오염처리", body: "객실 청소 이후 세탁과 오염 처리까지 자체 공정으로 이어져 호스트의 별도 조율이 줄어듭니다." },
];

const showcaseItems = [
  {
    key: "dashboard",
    title: "실시간 청소 현황 대시보드",
    caption: "숙소에 없어도 청소 진행 상황을 실시간으로 확인하세요.",
    instruction: "이 자리에 실시간 청소 현황 대시보드 캡처 이미지를 넣으세요",
    tooltip: "권장 비율 16:9 · 다수 숙소 상태가 보이는 화면 권장 · IMAGE_SOURCES.dashboard 경로만 교체하면 반영됩니다",
    bullets: ["진행 단계별 실시간 표시", "다수 숙소 동시 모니터링", "완료 알림으로 체크인 전 확인"],
  },
  {
    key: "settlement",
    title: "호스트 정산 화면",
    caption: "숙소별 청소 건수와 비용을 투명하게 정산받으세요.",
    instruction: "이 자리에 정산 화면 캡처 이미지를 넣으세요 (호스트명·빌딩명 마스킹 필수, 가장 비용 높은 케이스 기준)",
    tooltip: "권장 비율 4:3 · 호스트명·빌딩명 마스킹 필수 · IMAGE_SOURCES.settlement 경로만 교체하면 반영됩니다",
    bullets: ["항목별 단가 공개", "실시간 정산 내역 열람", "개인정보 마스킹 처리"],
  },
  {
    key: "cleanerReport",
    title: "클리너 보고 화면",
    caption: "체크리스트와 사진으로 청소 완료를 직접 눈으로 확인하세요.",
    instruction: "이 자리에 클리너 보고 화면 캡처 이미지를 넣으세요 (체크리스트와 사진이 함께 보이는 화면 권장)",
    tooltip: "권장 비율 4:3 · 체크리스트와 사진 동시 노출 권장 · IMAGE_SOURCES.cleanerReport 경로만 교체하면 반영됩니다",
    bullets: ["항목별 체크리스트", "완료 사진 첨부", "이상 발견 시 즉시 보고"],
  },
  {
    key: "butlerTasks",
    title: "버틀러 과업지시서 목록 화면",
    caption: "여러 숙소를 운영해도 배정부터 검수까지 한눈에 확인하세요.",
    description: "호스트도 실시간으로 업무 진행 상황을 파악할 수 있습니다.",
    instruction: "이 자리에 버틀러 과업지시서 목록 캡처 이미지를 넣으세요 (배정·담당·청소·검수 단계가 섞인 화면 권장)",
    tooltip: "권장 비율 16:9 · 배정·담당·청소·검수 단계 혼합 화면 권장 · IMAGE_SOURCES.butlerTasks 경로만 교체하면 반영됩니다",
    bullets: ["배정-담당-청소-검수 단계 표시", "다건 동시 관리", "실시간 상태 업데이트"],
  },
];

const strengthItems = [
  { title: "조직 운영 구조", proof: "데스크 · 배달팀 · 배급팀 · 세탁팀 · 클리너 · 관리감독 · 수거팀, 7개 파트가 유기적으로 움직입니다.", benefit: "그래서 호스트는 여러 업체를 따로 조율하지 않고 하나의 창구로 모든 걸 맡길 수 있습니다." },
  { title: "크로스체크 검수 체계", proof: "배급 → 클리닝 → 검수까지 3단계 크로스체크로 누락을 방지합니다.", benefit: "게스트 컴플레인 걱정을 줄이고 체크인 전 안심할 수 있습니다." },
  { title: "대규모 클리너 풀", proof: "60여 명 규모의 클리너 풀을 상시 운영합니다.", benefit: "급하게 예약이 잡히거나 여러 숙소 일정이 겹쳐도 대응 가능합니다." },
];

const processSteps = ["사전 상담", "업무 범위 논의", "현장 조율 (약 2개월 소요)", "최종 확정 및 계약"];

const faqItems = [
  ["어떤 숙소 운영자에게 적합한가요?", "에어비앤비, 부킹닷컴 등에서 단기 숙박을 운영하며 체크아웃-체크인 사이 청소 일정 확인이 중요한 호스트에게 적합합니다."],
  ["청소 완료 여부는 어떻게 확인하나요?", "대시보드에서 진행 상태를 확인하고, 완료 시 클리너가 남긴 사진과 체크리스트로 최종 상태를 확인합니다."],
  ["여러 숙소를 동시에 맡길 수 있나요?", "가능합니다. 숙소별 일정과 진행 상태를 한 화면에서 관리할 수 있어 다수 숙소 운영 부담을 줄입니다."],
  ["요금은 어떻게 책정되나요?", "정액제와 건별제 중 선택 가능하며, 거리·물량·방 크기 등 조건에 따라 달라집니다. 정확한 견적은 상담을 통해 안내드립니다."],
  ["게스트 체크인 전에 청소가 확실히 끝났는지 어떻게 확인하나요?", "대시보드에서 실시간으로 진행 상황을 확인할 수 있으며, 클리너가 완료 시 사진과 체크리스트를 남깁니다."],
];

const resultList = document.querySelector("#result-list");
if (resultList) {
  resultList.innerHTML = resultItems
    .map((item) => `
      <article class="result-card${item.type === "counter" ? " result-card-counter" : ""}">
        ${item.before ? `<small>${escapeHtml(item.before)}</small>` : ""}
        <strong ${item.type === "counter" ? 'id="live-cleaning-count" data-target="0"' : ""}>${escapeHtml(item.value)}</strong>
        <span>${escapeHtml(item.label)}${item.type === "counter" ? " <b>건</b>" : ""}</span>
        ${item.body ? `<p>${escapeHtml(item.body)}</p>` : ""}
      </article>`).join("");
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

const strengthList = document.querySelector("#strength-list");
if (strengthList) {
  strengthList.innerHTML = strengthItems.map((item, index) => `<article class="strength-card"><span class="card-number">${String(index + 1).padStart(2, "0")}</span><h3>${escapeHtml(item.title)}</h3><p><b>운영 구조</b>${escapeHtml(item.proof)}</p><p><b>호스트 이득</b>${escapeHtml(item.benefit)}</p></article>`).join("");
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
    })
    .catch((error) => console.error(error));
}

const observedSections = document.querySelectorAll("[data-observe-section]");
const navLinks = document.querySelectorAll(".nav-link[data-section]");
if (observedSections.length > 0 && navLinks.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    const activeEntry = entries.find((entry) => entry.isIntersecting);
    if (!activeEntry) return;
    navLinks.forEach((link) => link.classList.toggle("is-active", link.dataset.section === activeEntry.target.id));
  }, { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 });
  observedSections.forEach((section) => observer.observe(section));
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
