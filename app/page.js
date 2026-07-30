import Icon from "../components/Icons.js";
import { CleaningCounter, MobileNav, ShowcaseModalImage } from "../components/ClientWidgets.js";

const changes = [
  ["객실마다 연락해", "일정과 완료 확인", "한 화면에서", "진행 상태 확인"],
  ["체크인 직전에", "현장 문제 발견", "청소 중", "사진과 이슈 기록"],
  ["청소와 침구 일정이", "따로 움직임", "같은 체크인 일정에 맞춰", "함께 준비"],
];
const operationRoles = [
  ["calendar", "데스크", "일정·요청 확인"],
  ["supply", "배달팀", "침구·물품 이동"],
  ["linen", "배급팀", "객실별 준비"],
  ["broom", "클리너", "객실 정비"],
  ["checklist", "관리감독", "완료 검수"],
  ["receipt", "수거팀", "사용 침구 회수"],
  ["laundry", "세탁팀", "세탁·재준비"],
];
const processSteps = [
  ["사전 상담", "현재 운영 방식과 필요한 업무 확인"],
  ["업무 범위 논의", "객실 수, 일정, 업무 범위와 요청사항 조율"],
  ["현장 조율", "실제 현장 흐름과 인력 배치 조정", "약 2개월 소요"],
  ["최종 확정 및 운영 시작", "운영 조건과 계약 내용을 확정한 뒤 시작"],
];
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

function ProductScreen({ type, title, label, className = "" }) {
  return <figure className={`product-screen screen-${className}`}>
    {label && <span className="screen-label">{label}</span>}
    <div className="product-screen-frame"><ShowcaseImage type={type} title={title}/></div>
  </figure>;
}

export default function Home() {
  return <>
    <header className="site-header"><div className="header-inner"><a className="brand" href="#hero" aria-label="Tenacierge 홈"><span className="brand-mark">T</span>Tenacierge</a><MobileNav /></div></header>
    <main>
      <section id="hero" className="full-band hero-band"><div className="section-inner hero"><div className="hero-copy"><p className="hero-audience">단기숙박 숙소 현장 운영</p><h1>체크아웃 후 다음 체크인까지,<br />숙소 현장을 대신 챙깁니다.</h1><p className="hero-lead">청소·침구·검수·현장 이슈를 한 흐름으로 처리하고,<br className="desktop-break" /> 진행 상황은 기록으로 남깁니다.</p><div className="hero-actions"><a className="btn primary" href="#quote">우리 숙소도 가능한지 확인하기</a><a className="text-link" href="#evidence">실제 관리 화면 보기 <span aria-hidden="true">→</span></a></div></div><HeroRoomDiorama /></div></section>
      <section id="records" className="full-band records-band"><div className="section-inner records-section"><CleaningCounter /></div></section>
      <section id="solutions" className="full-band changes-band"><div className="section-inner compact-section"><h2>호스트가 직접 확인하던 일이<br />이렇게 줄어듭니다.</h2><div className="change-list">{changes.map(([beforeTop, beforeBottom, afterTop, afterBottom], index) => <article className="change-row" key={beforeTop}><span className="row-index">0{index + 1}</span><p className="change-before">{beforeTop}<br /><strong>{beforeBottom}</strong></p><span className="change-arrow" aria-hidden="true">→</span><p className="change-after">{afterTop}<br /><strong>{afterBottom}</strong></p></article>)}</div></div></section>
      <section id="evidence" className="full-band operations-story"><div className="section-inner operations-showcase">
          <div className="operations-hero" aria-labelledby="operations-title"><div className="operations-copy">
                <p className="section-label">객실 운영의 한 흐름</p>
                <h2 id="operations-title">객실 하나의 준비부터 검수까지,<br />7개의 역할이 함께 움직입니다.</h2>
                <p>일정 확인, 물품 준비, 객실 정비, 완료 검수와 침구 관리까지 업무별 전담 인력이 하나의 흐름으로 운영하며, 호스트도 객실별 진행 상태를 확인할 수 있습니다.</p>
              </div><ProductScreen type="dashboard" title="객실별 일정과 진행 상태" label="객실 일정·진행 현황" className="overview" /></div>
          <div id="services" className="anchor-target roles-block"><div className="role-ribbon">{operationRoles.map(([icon, role, detail]) => <div className="role-ribbon-item" key={role}><Icon name={icon}/><strong>{role}</strong><span>{detail}</span></div>)}</div><div className="crosscheck-bar"><strong>배급 → 클리닝 → 검수</strong><span>세 단계에서 같은 객실을 다시 확인합니다.</span></div></div>
          <div className="control-board" aria-labelledby="control-board-title">
            <div className="control-intro"><p className="section-label">업무 확인</p><h3 id="control-board-title">배정부터 완료 확인까지,<br />객실별 진행 상황을 놓치지 않습니다.</h3><p>배급 상태와 담당자를 지정하고 청소와 검수가 완료될 때까지 관리하며, 완료 사진과 객실 상태를 다시 확인해 기록으로 남깁니다.</p></div>
            <div className="control-screens"><ProductScreen type="butlerTasks" title="담당자 배정·청소·검수 상태" label="객실별 업무 상태" className="progress" /><div className="control-side"><ProductScreen type="cleanerReport" title="완료 사진과 체크리스트" label="완료 사진·체크리스트" className="checklist" /><ul>{["배급 상태와 담당자 배정","청소 진행과 검수 완료","완료 사진과 객실 상태 확인"].map(item=><li key={item}>{item}</li>)}</ul></div></div>
          </div>
          <div id="operations" className="anchor-target foundation-block"><div className="foundation-intro"><p className="section-label">운영 기반</p><h3>현장 뒤에서는 인력과 세탁, 기록이 함께 움직입니다.</h3></div><div className="foundation-ribbon"><div><strong>약 60명</strong><p>객실 일정과 업무 종류에 맞춰 역할별 인력을 배정합니다.</p></div><div id="laundry" className="anchor-target"><strong>세탁실 · 세탁공장 · 특수오염처리공정</strong><p>자체 세탁실 또는 세탁공장에서 처리하고, 일반 세탁이 어려운 오염은 별도 공정으로 분리합니다.</p></div><div><strong>객실별 기록</strong><p>완료 사진, 특이사항, 이용 내역과 비용 내역을 객실별로 남깁니다.</p></div></div></div>
          <div className="record-proof"><ProductScreen type="settlement" title="숙소별 작업·비용 내역" label="작업·이용·비용 내역" className="billing" /><div><p className="section-label">객실별 운영 기록</p><h3>작업 내용과 비용이<br />하나의 객실 기록에 남습니다.</h3><p>일정, 완료 사진, 검수, 특이사항과 이상 내용, 이용 내역과 비용 내역을 객실별로 확인할 수 있습니다.</p></div></div>
        </div></section>
      <section id="process" className="full-band process-band"><div className="section-inner process-section"><p className="section-label">시작 절차</p><h2>도입 전 운영 조건부터 맞춥니다.</h2><p className="section-copy">숙소마다 구조와 운영 방식이 달라, 시작 전 실제 현장 흐름과 업무 범위를 먼저 조율합니다.</p><ol className="process-steps">{processSteps.map(([title, body, note], index) => <li key={title}><span className="process-number" aria-hidden="true">{index + 1}</span><div><strong><span className="sr-only">{index + 1}단계 </span>{title}</strong>{note && <small>{note}</small>}<p>{body}</p></div></li>)}</ol><div className="pricing-note"><span className="pricing-note-label">요금 기준</span><p>정액제 또는 건별제로 운영하며, 거리·물량·방 크기 등에 따라 비용이 달라집니다.</p></div></div></section>
      <section id="faq" className="full-band faq-band"><div className="section-inner faq-section"><h2>자주 묻는 질문</h2><div className="faq-list">{faqs.map(([q, a]) => <details className="faq" key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
      <section id="quote" className="full-band quote-band"><div className="section-inner quote"><p className="section-label dark-label">상담 안내</p><h2>우리 숙소도 맡길 수 있는지<br />확인해 보세요.</h2><p>숙소 위치와 객실 수만 알려주시면 가능 범위를 빠르게 안내드립니다.</p><div className="quote-actions"><button className="quote-action primary" type="button" disabled>카카오톡 문의</button><button className="quote-action secondary" type="button" disabled>전화 문의</button></div></div></section>
    </main>
  </>;
}
