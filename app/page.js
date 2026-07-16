import AnimatedCounter from "../components/AnimatedCounter.jsx";
import ClientReveal from "../components/ClientReveal.jsx";
import Header from "../components/Header.jsx";

const verifiedMetrics = [
  {
    value: "120+",
    label: "관리 숙소",
    body: "여러 객실의 일정, 진행 상태와 비용을 한 화면에서 관리할 수 있도록 구성합니다.",
    icon: "door",
  },
  {
    value: "60여 명",
    label: "클리너 인력 운영",
    body: "객실 일정과 현장 상황에 맞춰 업무를 배정할 수 있는 인력 기반을 운영합니다.",
    icon: "team",
  },
  {
    value: "사진·체크리스트",
    label: "업무 완료 기록",
    body: "완료율 숫자의 기준은 확인되지 않아 숫자는 제외하고 기록 방식만 남겼습니다.",
    icon: "camera",
  },
  {
    value: "현장 이슈",
    label: "책임 대응",
    body: "발견된 현장 문제에 필요한 후속 대응이 이어지도록 관리한다는 점을 전달합니다.",
    icon: "tool",
  },
];

const problemItems = [
  {
    title: "확인해야 할 객실이 늘어납니다",
    body: "여러 객실의 청소 일정, 완료 여부, 비용 내역을 각각 확인하다 보면 현장 관리 시간이 빠르게 늘어납니다.",
    icon: "calendar",
  },
  {
    title: "직접 가지 않으면 놓치는 일이 있습니다",
    body: "비품 부족, 객실 오염, 파손, 시설 이상은 체크인 직전에 발견되면 더 큰 문제로 이어질 수 있습니다.",
    icon: "inspect",
  },
  {
    title: "업무가 따로 움직이면 기록이 흩어집니다",
    body: "청소, 침구 회수, 세탁, 배급, 검수를 각각 맞추면 흐름이 끊기고 확인할 일이 늘어납니다.",
    icon: "flow",
  },
];

const scopeItems = [
  {
    label: "직접 관리",
    title: "현장 업무를 하나의 흐름으로 관리합니다",
    body: "객실 청소, 침구 회수·세탁·배급, 일정 및 인력 배정, 완료 사진과 체크리스트, 숙소별 업무와 비용을 연결해 관리합니다.",
    icon: "broom",
  },
  {
    label: "현장 확인",
    title: "비품 부족과 객실 이상을 확인해 전달합니다",
    body: "호스트가 직접 확인하기 어려운 비품·소모품 부족, 객실 오염과 파손, 시설 이상, 현장 특이사항을 확인해 공유합니다.",
    icon: "amenity",
  },
  {
    label: "후속 지원",
    title: "필요한 대응이 이어지도록 지원합니다",
    body: "현장에서 발견한 문제를 그대로 남겨두지 않고, 가능한 간단한 조치와 상황 보고, 전문 수리가 필요한 경우의 AS 접수·일정 조율을 지원합니다.",
    icon: "toolbox",
  },
];

const IMAGE_SOURCES = {
  dashboard: "",
  cleanerReport: "",
  butlerTasks: "",
  settlement: "",
};

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

const strengthItems = [
  {
    title: "역할을 나눈 7개 운영 파트",
    body: "데스크, 배달팀, 배급팀, 세탁팀, 클리너, 관리감독, 수거팀이 역할을 나누어 움직입니다.",
    icon: "team",
  },
  {
    title: "배급·클리닝·검수 단계별 확인",
    body: "침구와 물품 배급, 객실 클리닝, 검수 단계에서 업무 누락 가능성을 줄이는 흐름을 운영합니다.",
    icon: "check",
  },
  {
    title: "60여 명 규모의 클리너 인력",
    body: "객실 일정과 현장 상황에 맞춰 업무를 배정할 수 있도록 클리너 인력을 운영합니다.",
    icon: "people",
  },
  {
    title: "직영 세탁공장 기반 침구 관리",
    body: "침구 세탁을 외부에 전적으로 의존하지 않고 직영 세탁공장에서 처리하며, 특수 오염도 상황에 따라 처리합니다.",
    icon: "laundry",
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

function MiniIcon({ type }) {
  return <span className={`mini-icon mini-icon-${type}`} aria-hidden="true" />;
}

function Illustration({ type }) {
  return (
    <span className={`illustration illustration-${type}`} aria-hidden="true">
      <span />
    </span>
  );
}

function ShowcaseVisual({ item }) {
  const src = IMAGE_SOURCES[item.key];

  if (src) {
    return <img className="showcase-image" src={src} alt={`${item.title} 화면 캡처`} />;
  }

  return (
    <div className="showcase-image placeholder" role="img" tabIndex="0" data-image-key={item.key} aria-label={`${item.title} 캡처 이미지 placeholder — 교체 필요`} data-tooltip={item.tooltip}>
      <span aria-hidden="true">▧</span>
      <strong>{item.instruction}</strong>
      <small>{item.tooltip}</small>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="landing-scroll-container">
        <section id="hero" className="landing-section hero-section" data-observe-section>
          <div className="section-inner hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">에어비앤비 · 부킹닷컴 호스트를 위한 숙소 현장 관리</p>
              <h1 className="hero-title">체크아웃 후 다음 손님이 오기 전까지, 숙소 현장을 관리합니다.</h1>
              <p className="lead hero-lead">객실 청소와 침구 회수·세탁·배급부터 완료 확인, 비품 부족과 객실 이상 보고까지. 호스트가 직접 숙소를 찾지 않아도 다음 체크인을 준비할 수 있도록 현장 업무를 하나의 흐름으로 관리합니다.</p>
              <div className="button-row hero-actions">
                <a className="btn btn-primary" href="#quote">우리 숙소 관리 가능 여부 확인</a>
                <a className="btn btn-secondary" href="#showcase">실제 관리 화면 보기</a>
              </div>
            </div>
            <div className="hero-visual" aria-label="숙소 현장 업무 흐름 요약">
              <div className="visual-card visual-card-primary">
                <span>FIELD CARE FLOW</span>
                <strong>청소 · 침구 · 검수 · 보고</strong>
                <p>체크아웃 이후부터 다음 체크인 전까지 필요한 현장 업무를 연결합니다.</p>
              </div>
              <div className="visual-step-list" aria-label="현장 업무 요약">
                {scopeItems.map((item) => <span key={item.label}>{item.label}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section id="results" className="landing-section proof-section" data-observe-section>
          <div className="section-inner proof-grid">
            <div className="section-heading proof-heading">
              <p className="eyebrow">OPERATING PROOF</p>
              <h2>숫자는 현장 관리 규모를 보여주는 보조 근거입니다.</h2>
              <p>확인되지 않은 수치는 과장하지 않고, 현재 코드와 서비스 설명에서 확인 가능한 요소만 표시합니다.</p>
            </div>
            <div className="result-grid" aria-live="polite">
              <AnimatedCounter />
              <div className="result-badge-row">
                {verifiedMetrics.map((item) => (
                  <article className="result-badge" key={item.label}>
                    <MiniIcon type={item.icon} />
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="problems" className="landing-section problem-section" data-observe-section>
          <div className="section-inner split-layout">
            <div className="section-heading sticky-heading">
              <p className="eyebrow">HOST PAIN POINTS</p>
              <h2>호스트가 직접 가지 않으면 보이지 않는 일들이 있습니다.</h2>
              <p>숙소가 늘수록 청소 자체보다 청소 전후에 확인해야 할 현장 업무가 함께 늘어납니다.</p>
            </div>
            <div className="problem-list">
              {problemItems.map((item) => (
                <article className="problem-card reveal-on-scroll" key={item.title}>
                  <Illustration type={item.icon} />
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="scope" className="landing-section scope-section" data-observe-section>
          <div className="section-inner">
            <div className="section-heading section-heading-center">
              <p className="eyebrow">SERVICE SCOPE</p>
              <h2>청소만 처리하지 않고, 다음 체크인에 필요한 현장 흐름을 관리합니다.</h2>
              <p>제공 범위는 명확하게 나누되, 고객이 알아야 할 핵심만 간결하게 전달합니다.</p>
            </div>
            <div className="scope-grid">
              {scopeItems.map((item) => (
                <article className="scope-card reveal-on-scroll" key={item.label}>
                  <Illustration type={item.icon} />
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="showcase" className="landing-section showcase-section" data-observe-section>
          <div className="section-inner">
            <div className="section-heading showcase-heading">
              <p className="eyebrow">SHOWCASE</p>
              <h2>현장 업무가 말로만 끝나지 않도록, 화면에 기록합니다.</h2>
              <p>진행 상태, 완료 보고, 업무 배정, 정산 화면을 통해 여러 객실의 흐름을 확인할 수 있습니다.</p>
            </div>
            <div className="showcase-list">
              {showcaseItems.map((item) => (
                <article className="showcase-item reveal-on-scroll" key={item.key}>
                  <ShowcaseVisual item={item} />
                  <div className="showcase-copy">
                    <h3>{item.title}</h3>
                    <p>{item.caption}</p>
                    <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="operations" className="landing-section operations-section" data-observe-section>
          <div className="section-inner operations-layout">
            <div className="section-heading operations-heading">
              <p className="eyebrow">OPERATING SYSTEM</p>
              <h2>역할을 나눈 조직과 단계별 확인으로 현장 품질을 관리합니다.</h2>
              <p>한 명의 클리너에게 모든 판단을 맡기지 않고, 세탁·배급·클리닝·검수가 연결된 구조로 움직입니다.</p>
            </div>
            <div className="strength-grid">
              {strengthItems.map((item) => (
                <article className="strength-card reveal-on-scroll" key={item.title}>
                  <MiniIcon type={item.icon} />
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="landing-section process-section" data-observe-section>
          <div className="section-inner process-inner">
            <div className="section-heading process-heading">
              <p className="eyebrow">PROCESS</p>
              <h2>도입 전 운영 조건부터 맞춥니다.</h2>
              <p>대표가 전달한 절차는 유지하되, 아직 설명이 필요한 부분은 검토 메모로 표시했습니다.</p>
            </div>
            <div className="process-timeline" aria-label="도입 진행 프로세스">
              {processSteps.map((step, index) => (
                <article className="process-step" key={step}>
                  <span>{index + 1}</span>
                  <strong>{step}</strong>
                </article>
              ))}
            </div>
            <aside className="review-note" aria-label="대표님 확인 필요 메모">
              <span>내용 확인 필요</span>
              <strong>대표님 확인 필요</strong>
              <p>현장 조율 약 2개월 동안 구체적으로 어떤 업무와 조건을 조율하는지, 그리고 마지막 단계에서 무엇을 최종 확정하는지 설명이 필요합니다.</p>
            </aside>
          </div>
        </section>

        <section id="faq" className="landing-section faq-section" data-observe-section>
          <div className="section-inner faq-layout">
            <div className="section-heading faq-heading">
              <p className="eyebrow">FAQ</p>
              <h2>문의 전 자주 확인하는 내용</h2>
              <p>서비스 범위는 명확하게 구분하되, 약관처럼 길게 나열하지 않았습니다.</p>
            </div>
            <div className="faq-list">
              {faqItems.map(([question, answer]) => (
                <details className="faq-item" key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="quote" className="landing-section quote-section" data-observe-section>
          <div className="section-inner quote-panel">
            <div className="section-heading">
              <p className="eyebrow">CONTACT</p>
              <h2 className="quote-title">직접 확인하기 어려운 숙소 현장, 컨시어지강남이 대신 관리합니다.</h2>
              <p>숙소 수, 위치, 객실 구조와 운영 일정을 알려주시면 이용 가능한 업무 범위와 견적 방식을 안내해 드립니다.</p>
            </div>
            <div className="quote-actions" aria-label="상담 문의 방법">
              <a className="btn btn-primary" href="mailto:hello@example.com">운영 방식 상담받기</a>
              <a className="btn btn-secondary" href="tel:010-0000-0000">예상 견적 문의하기</a>
            </div>
            <p className="contact-note">연락처와 카카오 채널 링크는 프로젝트에서 실제 정보를 확인하지 못했습니다. 현재 메일과 전화번호는 예시 값일 수 있어 대표 확인이 필요합니다.</p>
          </div>
        </section>
      </main>
      <ClientReveal />
    </>
  );
}
