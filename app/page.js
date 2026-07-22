import Icon from "../components/Icons.js";
import { CleaningCounter, MobileNav, ShowcaseModalImage } from "../components/ClientWidgets.js";

const problems = [
  ["calendar", "일정과 완료 확인", "객실이 늘어날수록 청소 일정, 담당자 배정, 완료 여부를 각각 확인해야 합니다."],
  ["alert", "늦게 발견되는 현장 문제", "비품 부족, 오염, 파손, 시설 이상이 체크인 직전에 발견되면 대응할 시간이 부족합니다."],
  ["laundry", "침구와 청소 사이의 누락", "침구 수거·세탁·배포와 청소·검수 일정이 따로 움직이면 누락이 발생하기 쉽습니다."],
];
const scopes = [
  ["broom", "객실 청소", "체크아웃 이후 다음 손님을 맞을 수 있도록 객실을 정리하고 완료 상태를 남깁니다."],
  ["linen", "침구 운영", "객실 일정에 맞춰 침구를 수거하고 세탁, 분류, 배포 일정을 맞춥니다."],
  ["calendar", "일정·작업자 배정", "여러 객실의 체크아웃 시간을 보고 현장에 들어갈 담당자를 배정합니다."],
  ["checklist", "사진·체크리스트 기록", "청소 후 사진과 체크리스트로 객실 상태를 남겨 호스트가 바로 볼 수 있게 합니다."],
  ["supply", "비품·현장 이슈 보고", "부족한 비품, 오염, 파손, 시설 문제를 발견하면 객실별로 공유합니다."],
  ["receipt", "비용·후속 조치 정리", "숙소별 작업과 비용 내역을 정리하고 전문 수리가 필요하면 AS 일정 조율을 돕습니다."],
];
const showcases = [
  ["dashboard", "대시보드", "여러 객실의 청소 일정과 진행 상태를 한눈에 확인합니다."],
  ["cleanerReport", "완료 보고", "완료 사진, 체크리스트, 오염·파손·시설 이슈를 함께 기록합니다."],
  ["butlerTasks", "업무 배정", "작업자 배정과 청소·검수 상태를 객실 단위로 관리합니다."],
  ["settlement", "정산", "숙소별 업무 건수와 비용 내역을 항목별로 확인합니다."],
];
const processSteps = [
  ["사전 상담", "숙소 위치와 객실 수, 현재 운영 방식과 필요한 업무를 확인합니다."],
  ["업무 범위 논의", "청소, 침구, 비품, 검수, 수거와 시설 대응 중 필요한 범위를 정리합니다."],
  ["현장 조율", "약 2개월 동안 실제 일정과 작업 기준, 객실별 특이사항을 맞춰봅니다."],
  ["최종 확정", "현장에서 조율한 업무 범위와 작업 기준, 비용 조건을 확인한 뒤 운영 방식을 확정합니다."],
];
const laundryTags = ["침구 수거", "자체 세탁", "분류 및 보관", "객실별 재배포", "특수오염 처리"];
const operationTeams = ["데스크", "배달팀", "배급팀", "클리너", "관리감독", "수거팀", "세탁팀"];
const faqs = [
  ["어떤 숙소를 관리할 수 있나요?", "숙소 수, 위치, 객실 구조, 체크인·체크아웃 일정에 따라 관리 가능 여부를 확인합니다. 여러 객실을 운영하는 호스트도 상담 가능합니다."],
  ["청소 완료 여부는 어떻게 확인하나요?", "객실별 완료 상태와 작업 사진, 체크리스트, 특이사항을 시스템 기록으로 확인할 수 있습니다."],
  ["침구도 함께 관리하나요?", "객실 일정에 맞춰 침구 수거, 세탁, 배포 흐름을 관리합니다. 운영 방식은 숙소별 조건에 따라 협의합니다."],
  ["비품이 부족하면 어떻게 하나요?", "현장에서 부족한 비품과 소모품을 확인해 호스트에게 전달합니다. 구매 및 발주는 호스트가 직접 진행합니다."],
  ["시설 문제가 발견되면 어떻게 하나요?", "현장에서 가능한 간단한 조치는 상황에 따라 대응하며, 전문 수리가 필요한 경우 AS 접수와 일정 조율을 지원합니다."],
  ["일정 변경이나 긴급 요청도 가능한가요?", "확정된 작업 일정과 현장 상황에 따라 가능한 범위를 확인해 안내합니다. 긴급 이슈는 담당 책임자가 상황을 확인한 뒤 대응 방법을 안내합니다."],
  ["비용은 어떻게 정해지나요?", "운영 방식에 따라 정액제 또는 건별제로 협의할 수 있습니다. 숙소까지의 거리, 객실 수와 작업 물량, 방 크기와 구조, 청소와 침구 운영 범위, 일정 조건을 확인한 뒤 비용을 안내합니다. 숙소마다 조건이 달라 별도의 고정 요금표는 게시하지 않습니다."],
];

const showcaseImages = {
  dashboard: "/assets/images/landing/dashboard.jpg",
  cleanerReport: "/assets/images/landing/cleaner-report.jpg",
  butlerTasks: "/assets/images/landing/butler-tasks.jpg",
  settlement: "/assets/images/landing/settlement.jpg",
};

function ShowcaseImage({ type, title }) {
  return <ShowcaseModalImage src={showcaseImages[type]} title={title} />;
}

export default function Home() {
  return <>
    <header className="floating-nav" aria-label="Tenacierge 내비게이션"><a className="brand" href="#hero" aria-label="Tenacierge 홈"><span className="brand-mark">T</span>Tenacierge</a><MobileNav /></header>
    <main>
      <section id="hero" className="section hero"><div><p className="eyebrow">숙소 현장 운영 관리</p><h1>체크아웃 후 다음 체크인까지,<br />숙소 현장을 챙깁니다.</h1><p className="lead">청소팀, 침구 배송, 검수 담당자가 객실 일정에 맞춰 움직이고 비품 부족이나 시설 이슈까지 호스트에게 남깁니다.</p><div className="actions"><a className="btn primary" href="#quote">우리 숙소도 가능한지 확인하기</a><a className="btn" href="#process">시작 절차 살펴보기</a></div></div><div className="hero-card"><Icon name="key"/><strong>Cleaning · Linen · Inspection · Report</strong><p>호스트가 매번 현장에 가지 않아도 다음 손님을 맞을 준비가 어디까지 되었는지 확인할 수 있게 돕습니다.</p></div></section>
      <section id="results" className="section two"><div><p className="eyebrow">Operation Records</p><h2>현장에서 쌓아온 청소 기록</h2><p>시스템을 도입하기 전부터 이어온 현장 경험과 현재 실시간으로 쌓이고 있는 작업 기록을 함께 보여드립니다.</p></div><CleaningCounter /></section>
      <section id="problems" className="section pain-section"><p className="eyebrow">Host Pain Points</p><h2>호스트가 직접 가지 않으면 놓치기 쉬운 일들이 있습니다.</h2><div className="pain-list">{problems.map(([icon,title,body], index) => <article className="pain-item" key={title}><span className="pain-number">{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{body}</p></div><Icon name={icon}/></article>)}</div></section>
      <section id="scope" className="section service-section"><p className="eyebrow">Service Scope</p><h2>다음 체크인을 앞두고 현장에서 맡는 일들입니다.</h2><div className="grid service-grid">{scopes.map(([icon,title,body]) => <article className="service-card" key={title}><Icon name={icon}/><h3>{title}</h3><p>{body}</p></article>)}</div><div className="laundry-band"><Icon name="laundry"/><div><h3>자체 세탁시설과 특수오염 처리 공정</h3><p>객실에서 수거한 침구는 자체 세탁시설로 옮겨 세탁과 분류를 진행하고, 다시 객실 일정에 맞춰 배포합니다. 일반 세탁으로 처리하기 어려운 오염은 별도의 특수오염 처리 공정을 거쳐 상태를 확인합니다.</p><div className="laundry-tags">{laundryTags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></div></section>
      <section id="showcase" className="section"><p className="eyebrow">System</p><h2>현장에서 확인한 내용이 시스템 기록으로 남습니다.</h2><p>일정, 완료 사진, 체크리스트, 시설 이슈와 비용 내역을 객실별로 남겨 호스트가 필요한 순간에 다시 볼 수 있게 합니다.</p><div className="operation-panel"><div className="operation-copy"><p className="panel-kicker">현장 운영 구조</p><h3>여러 담당자가 각 단계를 나눠 확인합니다.</h3><p>데스크에서 접수한 일정은 침구 배송과 배급, 객실 클리닝, 검수, 수거와 세탁으로 이어집니다. 각 단계의 담당자가 앞뒤 작업을 다시 확인해 누락이나 현장 문제를 빠르게 공유합니다.</p></div><div className="operation-summary"><div><strong>약 60명 규모의 클리너 풀 운영</strong><p>객실 수와 지역, 일정과 작업 난이도를 보고 현장에 맞는 인력을 배정합니다.</p></div><div><strong>배급 → 클리닝 → 검수 단계별 크로스체크</strong><p>침구와 비품 전달, 청소 기준, 추가 공유가 필요한 오염이나 시설 문제를 단계별로 다시 봅니다.</p></div></div><div className="team-flow" aria-label="운영팀 흐름">{operationTeams.map((team, index) => <span key={team}>{team}{index < operationTeams.length - 1 ? <b aria-hidden="true" /> : null}</span>)}</div></div><div className="showcase-grid">{showcases.map(([key,title,body]) => <article className="showcase" key={key} data-image-key={key}><ShowcaseImage type={key} title={title}/><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></section>
      <section id="process" className="section"><p className="eyebrow">Process</p><h2>충분히 맞춰본 뒤 운영 방식을 확정합니다.</h2><p>숙소마다 객실 구조와 일정이 다르기 때문에 바로 계약부터 진행하지 않습니다. 사전 상담과 업무 범위 논의 후 약 2개월 동안 현장 조건을 조율하고, 서로 맞는 방식이 확인되면 최종 확정합니다.</p><ol className="timeline">{processSteps.map(([title,body]) => <li key={title}><strong>{title}</strong><p>{body}</p></li>)}</ol></section>
      <section id="faq" className="section"><p className="eyebrow">FAQ</p><h2>문의 전 자주 확인하는 내용</h2>{faqs.map(([q,a]) => <details className="faq" key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
      <section id="quote" className="section quote"><p className="eyebrow">Contact</p><h2>우리 숙소도 맡길 수 있는지 확인해 보세요.</h2><p>숙소 위치와 객실 수, 방 크기, 운영 일정과 필요한 업무를 알려주시면 정액제 또는 건별제 중 적합한 방식과 업무 범위를 함께 확인합니다.</p><div className="actions">{/* TODO: 실제 카카오채널 URL과 문의 채널이 확정되면 버튼 연결 */}<button className="btn primary" type="button" disabled>카카오톡으로 상담하기 · 준비 중</button><button className="btn" type="button" disabled>관리 가능 여부 문의하기 · 준비 중</button></div></section>
    </main>
  </>;
}
