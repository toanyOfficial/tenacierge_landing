import Icon from "../components/Icons.js";
import { CleaningCounter, MobileNav, ShowcaseModalImage } from "../components/ClientWidgets.js";

const changes = [
  ["객실마다 연락해", "일정과 완료 확인", "한 화면에서", "진행 상태 확인"],
  ["체크인 직전에", "현장 문제 발견", "청소 중", "사진과 이슈 기록"],
  ["청소와 침구 일정이", "따로 움직임", "같은 체크인 일정에 맞춰", "함께 준비"],
];
const operationRoles = [
  ["calendar", "일정 관리", "데스크", "체크인 일정과 요청사항 확인"],
  ["supply", "물품 이동", "배달팀", "필요한 침구와 물품 이동"],
  ["linen", "객실별 배급", "배급팀", "객실 일정에 맞춰 침구와 비품 준비"],
  ["broom", "객실 정비", "클리너", "객실 청소와 상태 확인"],
  ["checklist", "완료 검수", "관리감독", "완료 사진과 객실 상태 재확인"],
  ["receipt", "침구 회수", "수거팀", "사용한 침구를 객실별로 수거"],
  ["laundry", "세탁·재준비", "세탁팀", "세탁, 분류, 보관 후 다음 일정 준비"],
];
const crosscheckSteps = [["배급 확인", "침구·비품 준비 기록"], ["클리닝 완료", "완료 사진·특이사항 기록"], ["관리감독 검수", "객실 상태 재확인"]];
const operationFacts = [["약 60명의 운영 인력", "객실 일정과 업무 종류에 맞춰 역할별 인력을 배정합니다."], ["자체 침구 운영", "수거부터 세탁, 분류, 보관, 객실별 재배포까지 직접 관리합니다."], ["객실별 운영 기록", "완료 사진, 특이사항, 이용 내역과 비용 내역을 객실별로 남깁니다."]];
const laundrySteps = [["receipt", "침구 수거"], ["laundry", "세탁·건조"], ["checklist", "분류·보관"], ["linen", "객실별 재배포"], ["calendar", "다음 객실 일정"]];
const processSteps = [["상담", "위치·객실 수·운영 일정 확인"], ["범위 협의", "청소·침구·검수 범위 결정"], ["현장 조율", "실제 일정과 담당자 동선 조율"], ["운영 확정", "확인된 기준으로 시작"]];
const faqs = [
  ["어떤 숙소를 맡길 수 있나요?", "숙소 위치, 객실 수, 구조와 운영 일정을 확인한 뒤 안내합니다. 여러 객실을 운영하는 호스트도 상담할 수 있습니다."],
  ["청소가 끝났는지는 어떻게 확인하나요?", "관리 화면에서 객실별 완료 상태, 사진과 체크리스트를 확인할 수 있습니다."],
  ["비품이나 시설 문제가 발견되면 어떻게 하나요?", "발견 내용을 사진과 기록으로 공유합니다. 필요한 경우 가능한 현장 조치나 AS 일정 조율 범위를 안내합니다."],
  ["일정이 변경되면 대응할 수 있나요?", "변경 일정과 현장 인력 상황을 확인한 뒤 가능한 범위를 안내합니다. 모든 변경에 즉시 대응하는 것을 보장하지는 않습니다."],
  ["비용은 어떻게 정해지나요?", "숙소 위치, 객실 수와 구조, 작업 범위와 일정에 따라 정액제 또는 건별제로 협의합니다."],
];
const showcaseImages = { dashboard: "/assets/images/landing/dashboard.jpg", cleanerReport: "/assets/images/landing/cleaner-report.jpg", butlerTasks: "/assets/images/landing/butler-tasks.jpg", settlement: "/assets/images/landing/settlement.jpg" };

function HeroRoomDiorama() {
  return <figure className="hero-room-diorama" aria-hidden="true">
    <svg className="room-diorama-svg" viewBox="0 0 720 560" role="img" aria-labelledby="room-diorama-title" focusable="false">
      <title id="room-diorama-title">정돈된 숙소 객실 미니어처</title>
      <defs>
        <linearGradient id="dioramaWall" x1=".12" x2=".88" y1="0" y2="1"><stop stopColor="#fff8e8" stopOpacity=".3"/><stop offset=".55" stopColor="#d9c39c" stopOpacity=".18"/><stop offset="1" stopColor="#9d7d48" stopOpacity=".1"/></linearGradient>
        <linearGradient id="dioramaFloor" x1=".5" x2=".5" y1="0" y2="1"><stop stopColor="#d8c6a4" stopOpacity=".18"/><stop offset="1" stopColor="#725b38" stopOpacity=".26"/></linearGradient>
        <linearGradient id="windowGlass" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#f7ead0" stopOpacity=".32"/><stop offset="1" stopColor="#887d68" stopOpacity=".14"/></linearGradient>
        <linearGradient id="bedCream" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#fffdf6"/><stop offset=".58" stopColor="#eee0c6"/><stop offset="1" stopColor="#c9ae7c"/></linearGradient>
        <linearGradient id="duvetGold" x1=".1" x2=".9" y1="0" y2="1"><stop stopColor="#fff4d4"/><stop offset=".5" stopColor="#e5c98d"/><stop offset="1" stopColor="#b88c4e"/></linearGradient>
        <radialGradient id="roomLight" cx="78%" cy="43%" r="64%"><stop stopColor="#f3d998" stopOpacity=".22"/><stop offset=".55" stopColor="#d6b46e" stopOpacity=".07"/><stop offset="1" stopColor="#d6b46e" stopOpacity="0"/></radialGradient>
        <radialGradient id="lampWarm" cx="50%" cy="42%" r="65%"><stop stopColor="#ffe9ac" stopOpacity=".78"/><stop offset=".48" stopColor="#e6bd66" stopOpacity=".3"/><stop offset="1" stopColor="#d29d3e" stopOpacity="0"/></radialGradient>
        <filter id="softRoomShadow" x="-30%" y="-30%" width="160%" height="180%"><feDropShadow dx="0" dy="14" stdDeviation="13" floodColor="#050504" floodOpacity=".3"/></filter>
      </defs>

      <g className="diorama-room" aria-hidden="true">
        <path className="diorama-wall" d="M142 168C142 134 169 108 204 108H516C551 108 578 134 578 168V378C578 416 549 444 511 444H209C171 444 142 416 142 378Z" />
        <path className="diorama-floor" d="M178 332C234 302 486 302 542 332L584 420C524 462 196 462 136 420Z" />
        <ellipse className="room-light-wash" cx="454" cy="277" rx="218" ry="184" />
        <path className="floor-depth-line" d="M165 369C253 337 467 337 555 369" />
      </g>

      <g className="window-dressing" aria-hidden="true">
        <rect className="window-frame" x="414" y="136" width="104" height="94" rx="24" />
        <rect className="window-pane" x="420" y="142" width="92" height="82" rx="20" />
        <path className="window-line" d="M466 144V224M422 184H512" />
        <path className="curtain-panel curtain-left" d="M402 132C383 154 378 202 399 240L417 226C405 196 405 163 416 139Z" />
        <path className="curtain-panel curtain-right" d="M530 132C549 154 554 202 533 240L515 226C527 196 527 163 516 139Z" />
        <path className="curtain-fold" d="M401 140C390 166 390 205 401 230M531 140C542 166 542 205 531 230" />
      </g>

      <g className="room-bed" aria-hidden="true">
        <ellipse className="bed-ground-shadow" cx="359" cy="433" rx="174" ry="28" />
        <path className="bed-back" d="M206 276C206 238 237 210 276 210H438C477 210 508 238 508 278V338H206Z" />
        <path className="bed-frame" d="M200 310H514V392C514 424 489 448 457 448H257C225 448 200 424 200 392Z" />
        <path className="pillow pillow-one" d="M236 244C242 226 260 218 281 223L309 230C329 235 339 249 333 266C328 283 310 292 290 286L261 279C243 275 231 261 236 244Z" />
        <path className="pillow pillow-two" d="M330 244C336 226 354 218 375 223L403 230C423 235 433 249 427 266C422 283 404 292 384 286L355 279C337 275 325 261 330 244Z" />
        <path className="duvet-main" d="M314 320C366 296 462 314 514 366V394C514 425 489 448 458 448H278C286 389 298 340 314 320Z" />
        <path className="duvet-fold" d="M306 370C362 348 452 366 514 410C506 433 485 448 458 448H286C292 416 298 392 306 370Z" />
        <path className="duvet-curve" d="M334 326C382 314 444 326 492 360" />
        <path className="duvet-highlight" d="M340 334C386 324 439 335 478 359" />
      </g>

      <g className="nightstand" aria-hidden="true">
        <rect className="stand-body" x="536" y="318" width="64" height="72" rx="20" />
        <path className="stand-detail" d="M550 344H586M568 318V294" />
        <ellipse className="lamp-aura" cx="568" cy="288" rx="94" ry="82" />
        <ellipse className="lamp-core" cx="568" cy="280" rx="42" ry="36" />
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

function EvidenceFigure({ type, title, caption }) {
  return <figure className="story-figure"><ShowcaseImage type={type} title={title}/><figcaption>{caption}</figcaption></figure>;
}

export default function Home() {
  return <>
    <header className="site-header"><div className="header-inner"><a className="brand" href="#hero" aria-label="Tenacierge 홈"><span className="brand-mark">T</span>Tenacierge</a><MobileNav /></div></header>
    <main>
      <section id="hero" className="full-band hero-band"><div className="section-inner hero"><div className="hero-copy"><p className="hero-audience">단기숙박 숙소 현장 운영</p><h1>체크아웃 후 다음 체크인까지,<br />숙소 현장을 대신 챙깁니다.</h1><p className="hero-lead">청소·침구·검수·현장 이슈를 한 흐름으로 처리하고,<br className="desktop-break" /> 진행 상황은 기록으로 남깁니다.</p><div className="hero-actions"><a className="btn primary" href="#quote">우리 숙소도 가능한지 확인하기</a><a className="text-link" href="#evidence">실제 관리 화면 보기 <span aria-hidden="true">→</span></a></div></div><HeroRoomDiorama /></div></section>
      <section id="records" className="full-band records-band"><div className="section-inner records-section"><CleaningCounter /></div></section>
      <section id="solutions" className="full-band changes-band"><div className="section-inner compact-section"><h2>호스트가 직접 확인하던 일이<br />이렇게 줄어듭니다.</h2><div className="change-list">{changes.map(([beforeTop, beforeBottom, afterTop, afterBottom], index) => <article className="change-row" key={beforeTop}><span className="row-index">0{index + 1}</span><p className="change-before">{beforeTop}<br /><strong>{beforeBottom}</strong></p><span className="change-arrow" aria-hidden="true">→</span><p className="change-after">{afterTop}<br /><strong>{afterBottom}</strong></p></article>)}</div></div></section>
      <section id="evidence" className="full-band operations-story"><div className="section-inner story-section"><div className="story-intro"><div className="story-copy"><p className="section-label">객실 운영의 한 흐름</p><h2>객실 하나의 준비부터 검수까지,<br />7개의 역할이 함께 움직입니다.</h2><p>일정 확인, 물품 준비, 객실 정비, 완료 검수와 침구 관리까지 업무별 전담 인력이 하나의 흐름으로 운영합니다.</p><p className="host-realtime-note">호스트도 같은 화면에서 객실별 업무 현황을 <strong>실시간</strong>으로 확인할 수 있습니다.</p></div><EvidenceFigure type="dashboard" title="객실별 일정과 진행 상태" caption="객실별 일정과 진행 상태를 한 화면에서 관리합니다."/></div><section id="services" className="anchor-target role-journey" aria-labelledby="role-journey-title"><p className="section-label">현장이 움직이는 순서</p><h3 id="role-journey-title">일정 접수부터 침구 재준비까지 이어집니다.</h3><ol>{operationRoles.map(([icon, task, role, detail], index) => <li key={role}><span className="journey-number">{String(index + 1).padStart(2, "0")}</span><Icon name={icon}/><div><strong>{task}</strong><span>담당 · {role}</span><p>{detail}</p></div></li>)}</ol></section><article className="story-row"><div className="story-copy"><p className="section-label">담당자 배정과 단계별 진행</p><h3>일정만 등록하는 것으로 끝나지 않습니다.</h3><p>객실별 배급 상태와 담당자를 지정하고, 청소와 검수가 완료될 때까지 단계별로 확인합니다.</p><ul className="story-keywords"><li>객실별 업무 상태</li><li>배급 진행 여부</li><li>담당자 배정</li><li>청소·검수 진행 및 완료</li></ul></div><EvidenceFigure type="butlerTasks" title="담당자 배정·청소·검수 상태" caption="담당자 배정과 청소·검수 진행 상태를 객실별로 확인합니다."/></article><article className="story-row is-reverse"><div className="story-copy"><p className="section-label">한 번의 완료 표시로 끝내지 않습니다</p><h3>배급 → 클리닝 → 검수까지 크로스체크합니다.</h3><p>침구와 비품 준비 상태, 청소 완료 사진, 객실 상태를 단계별로 다시 확인하고 확인 결과를 객실별 이력으로 남깁니다.</p><ol className="crosscheck-steps">{crosscheckSteps.map(([title, detail], index) => <li key={title}><span>{index + 1}</span><div><strong>{title}</strong><small>{detail}</small></div></li>)}</ol></div><EvidenceFigure type="cleanerReport" title="완료 사진과 체크리스트" caption="완료 사진과 체크리스트가 단계별 확인의 근거로 남습니다."/></article><article className="story-row"><div className="story-copy"><p className="section-label">객실별 운영 기록</p><h3>작업 내용과 비용은 객실별로 남습니다.</h3><p>일정, 완료 사진, 검수, 이용 내역, 추가 작업과 비용 내역을 객실별로 기록하여 호스트가 같은 화면에서 확인할 수 있습니다.</p></div><EvidenceFigure type="settlement" title="숙소별 작업·비용 내역" caption="작업 항목과 이용·비용 내역을 숙소별로 확인합니다."/></article><section id="operations" className="anchor-target operation-foundation" aria-labelledby="foundation-title"><p className="section-label">운영 기반</p><h3 id="foundation-title">이 흐름을 가능하게 하는 세 가지 기반입니다.</h3><div>{operationFacts.map(([value, detail]) => <article key={value}><strong>{value}</strong><p>{detail}</p></article>)}</div></section><section id="laundry" className="anchor-target laundry-cycle" aria-labelledby="laundry-title"><div className="laundry-cycle-copy"><p className="section-label">침구 운영</p><h3 id="laundry-title">침구는 객실 일정에 맞춰 순환합니다.</h3><p>사용한 침구는 수거 후 자체 세탁시설 또는 세탁공장에서 처리하고, 품목별로 분류·보관한 뒤 객실 일정에 맞춰 다시 배포합니다.</p></div><ol>{laundrySteps.map(([icon, step], index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><Icon name={icon}/><strong>{step}</strong></li>)}</ol><aside className="special-care-branch"><span>세탁 전 상태 확인</span><strong>특수오염 → 별도 공정 확인</strong><p>일반 세탁이 어려운 오염은 상태를 확인한 뒤 별도 공정으로 처리합니다.</p></aside></section></div></section>
      <section id="process" className="full-band process-band"><div className="section-inner process-section"><p className="section-label">시작 절차</p><h2>바로 계약하지 않고,<br />먼저 현장을 맞춰봅니다.</h2><p className="section-copy">숙소마다 구조와 일정이 달라<br />약 2개월간 실제 흐름을 조율합니다.</p><ol className="timeline">{processSteps.map(([title, body]) => <li key={title}><strong>{title}</strong><span>{body}</span></li>)}</ol><div className="pricing-note"><span className="pricing-note-label">요금 기준</span><p>정액제 또는 건별제로 운영하며,<br />거리·물량·방 크기 등에 따라 비용이 달라집니다.</p></div></div></section>
      <section id="faq" className="full-band faq-band"><div className="section-inner faq-section"><h2>자주 묻는 질문</h2><div className="faq-list">{faqs.map(([q, a]) => <details className="faq" key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
      <section id="quote" className="full-band quote-band"><div className="section-inner quote"><p className="section-label dark-label">상담 안내</p><h2>우리 숙소도 맡길 수 있는지<br />확인해 보세요.</h2><p>숙소 위치와 객실 수만 알려주시면 가능 범위를 빠르게 안내드립니다.</p><div className="quote-actions"><button className="quote-action primary" type="button" disabled>카카오톡 문의</button><button className="quote-action secondary" type="button" disabled>전화 문의</button></div></div></section>
    </main>
  </>;
}
