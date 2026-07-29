import Icon from "../components/Icons.js";
import { CleaningCounter, MobileNav, ShowcaseModalImage } from "../components/ClientWidgets.js";

const problemSolutions = [
  { icon: "calendar", title: "청소 일정과 완료 여부를 매번 확인해야 할 때", problem: "여러 객실의 일정, 담당자와 완료 여부를 각각 확인해야 합니다.", response: "객실별 일정과 진행 상태를 기록합니다.", result: "여러 객실의 상황을 한 화면에서 확인할 수 있습니다." },
  { icon: "alert", title: "체크인 직전에 현장 문제가 발견될 때", problem: "비품 부족, 오염이나 시설 이상이 다음 손님 입실 직전에 발견되기도 합니다.", response: "청소 과정에서 사진, 체크리스트와 현장 이슈를 남깁니다.", result: "발견된 내용을 객실별로 확인할 수 있습니다." },
  { icon: "laundry", title: "침구와 청소 일정이 따로 움직일 때", problem: "수거, 세탁, 배포와 청소 일정이 따로 움직이면 준비가 빠질 수 있습니다.", response: "침구 준비와 현장 일정을 함께 연결합니다.", result: "다음 체크인 일정에 맞춰 필요한 침구를 준비합니다." },
];

const serviceGroups = [
  { icon: "calendar", title: "일정에 맞춘 현장 투입", items: ["확정된 숙박 일정에 따른 청소 진행", "객실과 일정에 맞춘 작업자 배정", "일정 변경 시 현장 인력과 동선 조정"] },
  { icon: "linen", title: "청소·침구·물품 준비", items: ["객실 클리닝", "침구와 수건 세탁", "침구와 물품 준비 및 배급", "세탁물과 사용 물품 수거"] },
  { icon: "checklist", title: "검수·기록·이상 보고", items: ["청소 결과 검수", "완료 사진과 체크리스트 기록", "비품 상태와 시설 이상 확인", "이상 상황 공유", "숙소별 작업 및 정산 내역 제공"] },
];

const unsupportedServices = ["예약 접수 및 관리", "숙박 플랫폼 계정 운영", "숙박 요금 조정", "전체 게스트 메시지 응대", "숙소 사업 전체 운영 대행"];
const processSteps = [
  ["사전 상담", "숙소 위치, 객실 수, 운영 일정과 필요한 업무를 확인합니다."],
  ["업무 범위 논의", "청소, 침구, 검수와 현장 확인 범위를 숙소에 맞게 정리합니다."],
  ["현장 조율", "약 2개월간 실제 일정에 맞춰 작업 방식과 담당자 간 동선을 조율합니다."],
  ["최종 확정", "확인된 범위와 기준을 바탕으로 업무 방식을 확정합니다."],
];
const laundrySteps = [["linen", "침구 수거"], ["laundry", "자체 세탁"], ["checklist", "분류 및 보관"], ["calendar", "객실별 재배포"]];
const operationTeams = ["준비·배급", "클리닝·검수", "수거·세탁"];
const faqs = [
  ["어떤 숙소를 맡길 수 있나요?", "숙소 위치, 객실 수와 구조, 체크인·체크아웃 일정을 확인한 뒤 안내합니다. 여러 객실을 운영하는 호스트도 상담할 수 있습니다."],
  ["청소 완료 여부는 어떻게 확인하나요?", "관리 화면에서 객실별 완료 상태를 확인할 수 있습니다. 작업 사진, 체크리스트와 특이사항도 함께 남깁니다."],
  ["침구와 수건도 함께 관리하나요?", "가능합니다. 객실 일정에 맞춰 침구와 수건을 수거하고 세탁·분류한 뒤 다시 배포합니다."],
  ["비품이 부족하면 어떻게 하나요?", "부족한 비품과 소모품을 현장에서 확인해 공유합니다. 구매와 발주는 호스트가 직접 진행합니다."],
  ["시설 문제가 발견되면 어떻게 하나요?", "발견한 시설 이상을 사진과 기록으로 공유합니다. 간단한 현장 조치는 상황에 따라 진행하며, 전문 수리가 필요하면 AS 접수와 일정 조율을 지원합니다."],
  ["일정이 변경되면 대응할 수 있나요?", "변경된 일정과 현장 인력 상황을 확인한 뒤 가능한 범위를 안내합니다. 모든 변경에 즉시 대응할 수 있는 것은 아닙니다."],
  ["비용은 어떻게 정해지나요?", "숙소 조건과 맡길 업무 범위를 확인한 뒤 안내합니다. 거리, 객실 수와 구조, 작업 물량, 청소·침구 범위와 일정에 따라 정액제 또는 건별제로 협의합니다."],
];
const showcaseImages = { dashboard: "/assets/images/landing/dashboard.jpg", cleanerReport: "/assets/images/landing/cleaner-report.jpg", butlerTasks: "/assets/images/landing/butler-tasks.jpg", settlement: "/assets/images/landing/settlement.jpg" };
const contactChannels = [
  { type: "kakao", label: "카카오톡 상담", description: "숙소 정보와 필요한 업무를 메시지로 남길 수 있습니다.", href: null, status: "준비 중", priority: "primary" },
  { type: "phone", label: "전화 상담", description: "업무 범위와 운영 일정에 대해 통화로 상담할 수 있습니다.", href: null, status: "준비 중", priority: "secondary" },
  { type: "email", label: "이메일 문의", description: "객실 정보와 요청 사항을 정리해 전달할 수 있습니다.", href: null, status: "준비 중", priority: "secondary" },
];

function HeroRoomDiorama() {
  return <figure className="hero-room-diorama" aria-label="따뜻하게 정돈된 숙소 객실 미니어처 일러스트">
    <svg className="room-diorama-svg" viewBox="0 0 720 560" role="img" aria-labelledby="room-diorama-title">
      <title id="room-diorama-title">정돈된 숙소 객실 미니어처</title>
      <defs>
        <linearGradient id="dioramaWall" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#fff8e7" stopOpacity=".22"/><stop offset="1" stopColor="#d7b46a" stopOpacity=".14"/></linearGradient>
        <linearGradient id="bedCream" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#fffaf0"/><stop offset="1" stopColor="#ead8b4"/></linearGradient>
        <linearGradient id="duvetGold" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#f6e0a4"/><stop offset="1" stopColor="#d8b66e"/></linearGradient>
        <radialGradient id="lampWarm" cx="50%" cy="40%" r="65%"><stop stopColor="#f3d991" stopOpacity=".72"/><stop offset="1" stopColor="#f3d991" stopOpacity="0"/></radialGradient>
      </defs>

      <g className="diorama-room" aria-hidden="true">
        <path className="diorama-wall" d="M142 168C142 134 169 108 204 108H516C551 108 578 134 578 168V378C578 416 549 444 511 444H209C171 444 142 416 142 378Z" />
        <path className="diorama-floor" d="M178 332C234 302 486 302 542 332L584 420C524 462 196 462 136 420Z" />
      </g>

      <g className="window-dressing" aria-hidden="true">
        <rect className="window-pane" x="420" y="142" width="92" height="82" rx="20" />
        <path className="window-line" d="M466 144V224M422 184H512" />
        <path className="curtain-soft" d="M400 136C382 164 382 204 400 234" />
        <path className="curtain-soft" d="M532 136C550 164 550 204 532 234" />
      </g>

      <g className="room-bed" aria-hidden="true">
        <path className="bed-back" d="M206 276C206 238 237 210 276 210H438C477 210 508 238 508 278V338H206Z" />
        <path className="bed-frame" d="M200 310H514V392C514 424 489 448 457 448H257C225 448 200 424 200 392Z" />
        <path className="pillow pillow-one" d="M236 244C242 226 260 218 281 223L309 230C329 235 339 249 333 266C328 283 310 292 290 286L261 279C243 275 231 261 236 244Z" />
        <path className="pillow pillow-two" d="M330 244C336 226 354 218 375 223L403 230C423 235 433 249 427 266C422 283 404 292 384 286L355 279C337 275 325 261 330 244Z" />
        <path className="duvet-main" d="M314 320C366 296 462 314 514 366V394C514 425 489 448 458 448H278C286 389 298 340 314 320Z" />
        <path className="duvet-fold" d="M306 370C362 348 452 366 514 410C506 433 485 448 458 448H286C292 416 298 392 306 370Z" />
        <path className="duvet-curve" d="M334 326C382 314 444 326 492 360" />
      </g>

      <g className="nightstand" aria-hidden="true">
        <rect className="stand-body" x="536" y="318" width="64" height="72" rx="20" />
        <path className="stand-detail" d="M550 344H586M568 318V294" />
        <ellipse className="lamp-aura" cx="568" cy="294" rx="58" ry="48" />
        <path className="lamp-shade-soft" d="M544 266C553 253 583 253 592 266L579 296H557Z" />
        <path className="lamp-base" d="M568 296V318" />
      </g>

      <g className="plant-corner" aria-hidden="true">
        <path className="plant-pot" d="M158 358H200L194 414H164Z" />
        <path className="plant-leaf" d="M179 358C154 340 153 314 173 308C191 318 194 338 179 358Z" />
        <path className="plant-leaf" d="M184 358C210 340 214 314 194 308C176 318 174 338 184 358Z" />
        <path className="plant-leaf small" d="M182 356C180 330 190 316 206 318C210 336 200 350 182 356Z" />
      </g>

      <g className="soft-towels" aria-hidden="true">
        <path d="M138 392C154 382 184 382 200 392V414H138Z" />
        <path d="M148 392C161 386 177 386 190 392" />
      </g>
    </svg>
  </figure>;
}
function ShowcaseImage({ type, title }) {
  return <ShowcaseModalImage src={showcaseImages[type]} title={title} />;
}

export default function Home() {
  return <>
    <header className="floating-nav" aria-label="Tenacierge 내비게이션"><a className="brand" href="#hero" aria-label="Tenacierge 홈"><span className="brand-mark">T</span>Tenacierge</a><MobileNav /></header>
    <main>
      <section id="hero" className="section hero dark-section"><div className="hero-copy"><p className="hero-audience">단기숙박 객실을 운영하는 호스트를 위한 현장 관리</p><h1>체크아웃 후 다음 체크인까지,<br />숙소 현장을 챙깁니다.</h1><div className="lead"><p>확정된 숙박 일정에 맞춰 청소, 침구와 검수를 진행합니다.</p><p>일정과 완료 여부를 여러 담당자에게 따로 확인하는 부담을 줄입니다.</p></div><div className="actions"><a className="btn primary" href="#quote">관리 가능 여부 확인하기</a><a className="btn secondary" href="#evidence">실제 관리 화면 보기</a></div></div><HeroRoomDiorama /></section>
      <section id="records" className="records-band dark-section"><div className="section records-section"><div className="records-intro"><p className="eyebrow">현장 업무 기록</p><h2>현장 업무 기록을 숫자로 확인합니다.</h2><p>시스템 도입 전후의 전산 집계 기준을 구분해 표시합니다.</p></div><CleaningCounter /></div></section>
      <section id="solutions" className="light-band"><div className="section"><p className="eyebrow">호스트가 놓치기 쉬운 일</p><h2>호스트가 직접 확인하던 일을 현장에서 이어서 처리합니다.</h2><p className="section-intro">일정 확인, 현장 문제, 침구 누락처럼 반복되는 업무를 발견 단계에서 기록하고 연결합니다.</p><div className="solution-list">{problemSolutions.map((item, index) => <article className="solution-row" key={item.title}><div className="solution-title"><span>{String(index + 1).padStart(2, "0")}</span><Icon name={item.icon}/><h3>{item.title}</h3></div><div><b>호스트의 문제</b><p>{item.problem}</p></div><div><b>현장 대응</b><p>{item.response}</p></div><div className="solution-result"><b>확인 결과</b><p>{item.result}</p></div></article>)}</div></div></section>
      <section id="evidence" className="neutral-band"><div className="section evidence-section"><p className="eyebrow">실제 관리 화면</p><h2>숙소에 가지 않아도 진행 상황을 확인할 수 있습니다.</h2><p>객실 일정, 완료 사진, 체크리스트, 작업 상태와 비용 내역을 관리 화면에서 확인합니다.</p><div className="evidence-layout"><figure className="evidence-figure evidence-dashboard"><ShowcaseImage type="dashboard" title="여러 객실의 일정과 진행 상태"/><figcaption><strong>여러 객실의 일정과 진행 상태</strong><span>객실별 청소 일정, 담당자와 현재 진행 상태를 확인합니다.</span></figcaption></figure><figure className="evidence-figure evidence-report"><ShowcaseImage type="cleanerReport" title="완료 사진과 체크리스트"/><figcaption><strong>완료 사진과 체크리스트</strong><span>청소 결과, 비품 상태와 현장에서 발견한 내용을 객실별로 남깁니다.</span></figcaption></figure><p className="evidence-scroll-hint">옆으로 넘겨 다른 관리 화면도 확인하세요.</p><div className="evidence-secondary" aria-label="추가 관리 화면"><figure className="evidence-figure"><ShowcaseImage type="butlerTasks" title="작업자 배정과 청소·검수 상태"/><figcaption><strong>작업자 배정과 청소·검수 상태</strong><span>담당자 배정부터 청소와 검수 진행 여부까지 확인합니다.</span></figcaption></figure><figure className="evidence-figure"><ShowcaseImage type="settlement" title="숙소별 작업 건수와 비용 내역"/><figcaption><strong>숙소별 작업 건수와 비용 내역</strong><span>기간별 작업 내역과 비용 근거를 숙소별로 확인합니다.</span></figcaption></figure></div></div></div></section>
      <section id="services" className="light-band service-band"><div className="section"><p className="eyebrow">맡는 업무</p><h2>다음 체크인을 앞두고, 이 업무들을 맡습니다.</h2><p className="section-intro">확정된 숙박 일정 이후의 현장 업무를 세 가지 범위로 나누어 진행합니다.</p><div className="service-groups">{serviceGroups.map((group, index) => <article className="service-group" key={group.title}><div className="service-heading"><span>0{index + 1}</span><Icon name={group.icon}/><h3>{group.title}</h3></div><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div><aside className="scope-note"><strong>다음 업무는 포함하지 않습니다.</strong><ul>{unsupportedServices.map(item => <li key={item}>{item}</li>)}</ul></aside></div></section>
      <section id="operations" className="neutral-band"><div className="section operations-section"><div className="operations-message"><p className="eyebrow">현장이 움직이는 방식</p><h2>여러 담당자를 호스트가 직접 조율하지 않아도 됩니다.</h2><p>역할별 담당자가 준비, 청소, 검수와 수거를 이어서 진행하고 현장 상황을 공유합니다.</p><div className="team-note" aria-label="현장 역할">{operationTeams.map(team => <span key={team}>{team}</span>)}</div></div><div className="fact-list"><article><strong>약 60명</strong><h3>일정에 맞춘 인력 배정</h3><p>일정과 객실 조건에 맞춰 배정할 수 있는 클리너 인력을 운영합니다.</p></article><article><strong>단계별 확인</strong><h3>배급 → 클리닝 → 검수</h3><p>배급, 클리닝과 검수 단계에서 앞뒤 작업을 다시 확인합니다.</p></article><article><strong>객실별 공유</strong><h3>사진과 기록으로 전달</h3><p>비품 부족이나 시설 이상 등 발견된 내용을 사진과 기록으로 남깁니다.</p></article></div></div></section>
      <section id="laundry" className="laundry-section neutral-band"><div className="section laundry-layout"><div><p className="eyebrow">침구 운영</p><h2>침구 수거부터 세탁·재배포까지 이어서 진행합니다.</h2><div className="laundry-copy"><p>수거한 침구를 자체 세탁시설에서 세탁하고 분류합니다.</p><p>객실별 일정에 맞춰 필요한 침구를 다시 준비합니다.</p></div><aside className="stain-note"><Icon name="alert"/><span>일반 세탁으로 처리하기 어려운 오염은 필요 시 별도 공정으로 확인합니다.</span></aside></div><ol className="laundry-flow">{laundrySteps.map(([icon, label], index) => <li key={label}><span>{index + 1}</span><Icon name={icon}/><strong>{label}</strong></li>)}</ol></div></section>
      <section id="process" className="light-band"><div className="section"><p className="eyebrow">시작 절차</p><h2>숙소별 조건을 확인한 뒤 업무 범위를 정합니다.</h2><p>객실 구조와 운영 일정이 다르기 때문에 바로 계약하기보다, 실제 업무 범위와 현장 동선을 먼저 확인합니다.</p><ol className="timeline">{processSteps.map(([title, body]) => <li key={title}><strong>{title}</strong><p>{body}</p></li>)}</ol></div></section>
      <section id="faq" className="light-band faq-band"><div className="section"><p className="eyebrow">자주 묻는 질문</p><h2>문의 전 자주 확인하는 내용</h2><div className="faq-list">{faqs.map(([q, a]) => <details className="faq" key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
      <section id="quote" className="quote-band dark-section"><div className="section quote"><p className="eyebrow">상담 안내</p><h2>우리 숙소도 맡길 수 있는지 확인해 보세요.</h2><p>숙소 위치, 객실 수, 운영 일정과 필요한 업무를 알려주시면 관리 가능 범위와 상담 방법을 안내합니다.</p><p className="contact-status">문의 채널을 준비하고 있습니다. 연결 정보는 추후 업데이트됩니다.</p><div className="contact-grid">{contactChannels.map(channel => <article className={`contact-channel ${channel.priority}`} key={channel.type}><div><span>{channel.status}</span><h3>{channel.label}</h3><p>{channel.description}</p></div>{channel.href ? <a className="btn" href={channel.href}>{channel.label}</a> : <button className="btn" type="button" disabled>연결 준비 중</button>}</article>)}</div></div></section>
    </main>
  </>;
}
