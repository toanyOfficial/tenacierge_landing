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
  cleanerReport: "",
  butlerTasks: "",
  settlement: "",
};

const verifiedMetrics = [
  {
    value: "120+",
    label: "관리 숙소",
    body: "여러 객실의 일정, 진행 상태와 비용을 한 화면에서 관리할 수 있도록 구성합니다.",
  },
  {
    value: "60여 명",
    label: "클리너 인력 운영",
    body: "객실 일정과 현장 상황에 맞춰 업무를 배정할 수 있는 인력 기반을 운영합니다.",
  },
  {
    value: "사진·체크리스트",
    label: "업무 완료 기록",
    body: "완료율 숫자의 기준은 코드와 문서에서 확인되지 않아 숫자는 제외하고 기록 방식만 남겼습니다.",
  },
  {
    value: "현장 이슈",
    label: "책임 대응",
    body: "발견된 현장 문제에 필요한 후속 대응이 이어지도록 관리한다는 점을 전달합니다.",
  },
];

const problemItems = [
  {
    title: "확인해야 할 객실이 늘어납니다",
    body: "여러 객실의 청소 일정, 완료 여부, 비용 내역을 각각 확인하다 보면 현장 관리 시간이 빠르게 늘어납니다.",
  },
  {
    title: "현장에 가지 않으면 놓치는 일이 있습니다",
    body: "비품 부족, 객실 오염, 파손, 시설 이상은 체크인 직전에 발견되면 더 큰 문제로 이어질 수 있습니다.",
  },
  {
    title: "청소·세탁·배급·검수를 따로 맞추기 어렵습니다",
    body: "각 업무가 따로 움직이면 침구 회수와 배급, 청소 완료 확인, 검수 기록이 흩어지기 쉽습니다.",
  },
];

const scopeItems = [
  {
    label: "직접 관리",
    title: "현장 업무를 하나의 흐름으로 관리합니다",
    body: "객실 청소, 침구 회수·세탁·배급, 일정 및 인력 배정, 완료 사진과 체크리스트, 숙소별 업무와 비용을 연결해 관리합니다.",
  },
  {
    label: "현장 확인",
    title: "비품 부족과 객실 이상을 확인해 전달합니다",
    body: "호스트가 직접 확인하기 어려운 비품·소모품 부족, 객실 오염과 파손, 시설 이상, 현장 특이사항을 확인해 공유합니다.",
  },
  {
    label: "후속 지원",
    title: "필요한 대응이 이어지도록 지원합니다",
    body: "현장에서 발견한 문제를 그대로 남겨두지 않고, 가능한 간단한 조치와 상황 보고, 전문 수리가 필요한 경우의 AS 접수·일정 조율을 지원합니다.",
  },
];

const showcaseItems = [
  {
    key: "dashboard",
    title: "매번 연락하지 않아도 진행 상태를 확인합니다",
    caption: "여러 객실의 청소 진행 단계를 화면에서 확인할 수 있어, 완료 여부를 매번 전화나 메시지로 물어보는 부담을 줄입니다.",
    instruction: "이 자리에 청소 진행 화면 캡처 이미지를 넣으세요",
    tooltip: "권장 비율 16:9 · 호스트명, 빌딩명, 객실번호, 연락처, 개인 식별 정보 마스킹 필수 · IMAGE_SOURCES.dashboard 경로만 교체하면 반영됩니다",
    bullets: ["객실별 진행 단계 확인", "여러 객실 동시 모니터링", "체크인 전 완료 상태 확인"],
  },
  {
    key: "cleanerReport",
    title: "사진과 체크리스트로 업무 결과를 확인합니다",
    caption: "청소 완료 사진, 체크리스트, 특이사항 기록을 통해 현장 결과를 남깁니다.",
    instruction: "이 자리에 완료 보고 화면 캡처 이미지를 넣으세요",
    tooltip: "권장 비율 4:3 · 체크리스트와 사진이 함께 보이는 화면 권장 · 개인 식별 정보 마스킹 필수 · IMAGE_SOURCES.cleanerReport 경로만 교체하면 반영됩니다",
    bullets: ["항목별 체크리스트", "완료 사진 첨부", "오염·파손·시설 이상 기록"],
  },
  {
    key: "butlerTasks",
    title: "여러 객실의 진행 단계를 한 화면에서 관리합니다",
    caption: "담당 배정부터 청소, 검수까지 객실별 업무 흐름을 정리해 확인합니다.",
    instruction: "이 자리에 업무 배정 및 과업 화면 캡처 이미지를 넣으세요",
    tooltip: "권장 비율 16:9 · 배정, 청소, 검수 단계가 함께 보이는 화면 권장 · 객실번호와 개인정보 마스킹 필수 · IMAGE_SOURCES.butlerTasks 경로만 교체하면 반영됩니다",
    bullets: ["담당 인력 배정 확인", "청소·검수 단계 관리", "다건 업무 상태 업데이트"],
  },
  {
    key: "settlement",
    title: "숙소별 업무와 비용을 항목 단위로 확인합니다",
    caption: "어떤 숙소에서 어떤 업무와 비용이 발생했는지 정산 화면으로 확인할 수 있습니다.",
    instruction: "이 자리에 정산 화면 캡처 이미지를 넣으세요",
    tooltip: "권장 비율 4:3 · 호스트명, 빌딩명, 객실번호, 연락처, 개인 식별 정보 마스킹 필수 · IMAGE_SOURCES.settlement 경로만 교체하면 반영됩니다",
    bullets: ["숙소별 비용 확인", "업무 건수 집계", "정산 내역 확인"],
  },
];

const laundryHighlight = {
  title: "직영 세탁공장으로 후공정까지",
  body: "세탁, 수거, 특수오염처리까지 한 번에 이어집니다.",
};

const showcaseItems = [
  {
    title: "역할을 나눈 7개 운영 파트",
    body: "데스크, 배달팀, 배급팀, 세탁팀, 클리너, 관리감독, 수거팀이 역할을 나누어 움직입니다.",
  },
  {
    title: "배급·클리닝·검수 단계별 확인",
    body: "침구와 물품 배급, 객실 클리닝, 검수 단계에서 업무 누락 가능성을 줄이는 흐름을 운영합니다.",
  },
  {
    title: "60여 명 규모의 클리너 인력",
    body: "객실 일정과 현장 상황에 맞춰 업무를 배정할 수 있도록 클리너 인력을 운영합니다.",
  },
  {
    title: "직영 세탁공장 기반 침구 관리",
    body: "침구 세탁을 외부에 전적으로 의존하지 않고 직영 세탁공장에서 처리하며, 특수 오염도 상황에 따라 처리합니다.",
  },
];

const processSteps = ["사전 상담", "업무 범위 논의", "현장 조율 (약 2개월)", "최종 확정"];

const faqItems = [
  ["어떤 숙소가 이용할 수 있나요?", "에어비앤비, 부킹닷컴 등 단기 숙박을 운영하며 체크아웃 이후 다음 체크인 전까지 현장 관리가 필요한 호스트에게 적합합니다."],
  ["게스트 문의와 예약 관리도 대행하나요?", "컨시어지강남은 객실의 현장 업무 관리에 집중합니다. 게스트 메시지 응대, 예약 관리, 숙박요금 설정과 플랫폼 계정 관리는 제공하지 않습니다."],
  ["청소 완료 여부는 어떻게 확인하나요?", "업무 진행 상태를 시스템에서 확인하고, 완료 후에는 사진과 체크리스트로 결과를 확인할 수 있습니다."],
  ["비품이 부족하면 직접 구매해 주나요?", "청소 중 부족한 비품과 소모품을 확인해 호스트에게 전달하며, 필요한 물품은 호스트가 직접 준비합니다."],
  ["시설 이상이 발견되면 어떻게 하나요?", "현장에서 가능한 간단한 조치는 상황에 따라 처리하며, 전문 수리가 필요한 경우에는 호스트와 협의해 AS 접수와 일정 조율을 지원합니다. 전문 수리와 부품 교체 등에 발생하는 비용은 별도로 안내됩니다."],
  ["여러 숙소를 한 번에 맡길 수 있나요?", "가능합니다. 여러 객실의 일정, 진행 상태와 비용을 한 화면에서 확인할 수 있습니다."],
  ["비용은 어떻게 책정되나요?", "정액제와 건별제 중 선택할 수 있으며 거리, 물량, 객실 크기, 침구 구성과 업무 범위에 따라 달라집니다."],
];

const icons = {
  operations: `<svg viewBox="0 0 48 48" focusable="false"><circle cx="14" cy="16" r="5"></circle><circle cx="34" cy="16" r="5"></circle><circle cx="24" cy="33" r="5"></circle><path d="M18.5 18.5 21.5 29"></path><path d="M29.5 18.5 26.5 29"></path><path d="M19 16h10"></path></svg>`,
  check: `<svg viewBox="0 0 48 48" focusable="false"><path d="M14 25 21 32 35 16"></path><rect x="9" y="9" width="30" height="30" rx="7"></rect></svg>`,
  people: `<svg viewBox="0 0 48 48" focusable="false"><circle cx="18" cy="17" r="5"></circle><circle cx="31" cy="18" r="4"></circle><path d="M9 37c1.8-7 15.2-7 18 0"></path><path d="M26 34c2.7-3.8 10.9-3.2 13 2"></path></svg>`,
  laundry: `<svg viewBox="0 0 48 48" focusable="false"><rect x="10" y="6" width="28" height="36" rx="5"></rect><path d="M16 14h10"></path><circle cx="31" cy="14" r="2"></circle><circle cx="24" cy="28" r="9"></circle><path d="M17 29c4 3 9 3 14 0"></path></svg>`,
};

const resultList = document.querySelector("#result-list");
if (resultList) {
  resultList.innerHTML = `
    <section class="result-counter-panel" aria-labelledby="result-count-label">
      <span class="metric-kicker">시스템 도입 이후 누적 청소</span>
      <strong id="live-cleaning-count" class="result-count-number" data-target="">집계 중</strong>
      <p id="result-count-label" class="result-count-summary"><span id="result-date">${todayText}</span> 기준</p>
    </section>
    <div class="result-badge-row">
      ${verifiedMetrics.map((item) => `<article class="result-badge"><strong>${escapeHtml(item.value)}</strong><span>${escapeHtml(item.label)}</span><p>${escapeHtml(item.body)}</p></article>`).join("")}
    </div>`;
}

const problemList = document.querySelector("#problem-list");
if (problemList) {
  problemList.innerHTML = problemItems.map((item) => `<article class="problem-card"><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.body)}</p></article>`).join("");
}

const scopeList = document.querySelector("#scope-list");
if (scopeList) {
  scopeList.innerHTML = scopeItems.map((item) => `<article class="scope-card"><span>${escapeHtml(item.label)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.body)}</p></article>`).join("");
}

const showcaseList = document.querySelector("#showcase-list");
if (showcaseList) {
  showcaseList.innerHTML = showcaseItems.map((item) => {
    const src = IMAGE_SOURCES[item.key];
    const visual = src
      ? `<img class="showcase-image" src="${escapeHtml(src)}" alt="${escapeHtml(item.title)} 화면 캡처" />`
      : `<div class="showcase-image placeholder" role="img" tabindex="0" data-image-key="${escapeHtml(item.key)}" aria-label="${escapeHtml(item.title)} 캡처 이미지 placeholder — 교체 필요" data-tooltip="${escapeHtml(item.tooltip)}"><span aria-hidden="true">▧</span><strong>${escapeHtml(item.instruction)}</strong><small>${escapeHtml(item.tooltip)}</small></div>`;
    return `<article class="showcase-item reveal-on-scroll">${visual}<div class="showcase-copy"><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.caption)}</p><ul>${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul></div></article>`;
  }).join("");
}

const strengthList = document.querySelector("#strength-list");
if (strengthList) {
  const iconKeys = ["operations", "check", "people", "laundry"];
  strengthList.innerHTML = strengthItems.map((item, index) => `<article class="strength-card"><span class="strength-icon" aria-hidden="true">${icons[iconKeys[index]] ?? ""}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.body)}</p></article>`).join("");
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
      const count = Number(data.totalCount ?? data.count);
      if (!Number.isFinite(count)) throw new Error("Invalid count response");
      liveCount.dataset.target = String(count);
      liveCount.textContent = count.toLocaleString("ko-KR");
      if (liveCount.dataset.animated === "true") animateCount(liveCount, count);
    })
    .catch((error) => {
      console.error(error);
      liveCount.textContent = "집계 중";
      liveCount.removeAttribute("data-target");
    });
}

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");
if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    document.body.classList.toggle("nav-open", !isOpen);
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    });
  });
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
    if (entry.target.id === "results" && liveCount && liveCount.dataset.target && liveCount.dataset.animated !== "true") {
      liveCount.dataset.animated = "true";
      animateCount(liveCount, Number(liveCount.dataset.target));
    }
    animationObserver.unobserve(entry.target);
  });
}, { threshold: 0.2 });

document.querySelectorAll("#results, .reveal-on-scroll, #process").forEach((item) => animationObserver.observe(item));
