import Icon from "../components/Icons.js";
import { CleaningCounter, MobileNav } from "../components/ClientWidgets.js";

const problems = [
  ["calendar", "일정과 완료 확인", "객실이 늘어날수록 청소 일정, 담당자 배정, 완료 여부를 각각 확인해야 합니다."],
  ["alert", "늦게 발견되는 현장 문제", "비품 부족, 오염, 파손, 시설 이상이 체크인 직전에 발견되면 대응할 시간이 부족합니다."],
  ["laundry", "침구와 청소 사이의 누락", "침구 수거·세탁·배포와 청소·검수 일정이 따로 움직이면 누락이 발생하기 쉽습니다."],
];
const scopes = [
  ["broom", "객실 청소", "체크아웃 이후 다음 체크인 전까지 객실을 정리하고 완료 상태를 기록합니다."],
  ["linen", "침구 운영", "객실 일정에 맞춰 침구 수거, 세탁, 배포 흐름을 관리합니다."],
  ["calendar", "일정·작업자 배정", "여러 객실의 청소 일정과 담당자를 배정하고 진행 상태를 관리합니다."],
  ["checklist", "사진·체크리스트 기록", "완료 사진과 체크리스트를 통해 청소 및 검수 결과를 남깁니다."],
  ["supply", "비품·현장 이슈 보고", "부족한 비품과 소모품, 오염, 파손, 시설 문제를 확인해 호스트에게 전달합니다."],
  ["receipt", "비용·후속 조치 관리", "숙소별 업무와 비용 기록을 관리하고 전문 수리가 필요한 경우 AS 일정 조율을 지원합니다."],
];
const showcases = [
  ["dashboard", "대시보드", "여러 객실의 청소 일정과 진행 상태를 한눈에 확인합니다."],
  ["cleanerReport", "완료 보고", "완료 사진, 체크리스트, 오염·파손·시설 이슈를 함께 기록합니다."],
  ["butlerTasks", "업무 배정", "작업자 배정과 청소·검수 상태를 객실 단위로 관리합니다."],
  ["settlement", "정산", "숙소별 업무 건수와 비용 내역을 항목별로 확인합니다."],
];
const processSteps = [
  ["운영 현황 확인", "숙소 수, 위치, 객실 구조, 체크인·체크아웃 일정을 확인합니다."],
  ["업무 범위 협의", "청소, 침구, 비품, 검수, 시설 대응 범위를 정리합니다."],
  ["현장 기준 정리", "객실별 작업 방식과 완료 기준, 특이사항을 조율합니다."],
  ["담당자 배정 및 운영 시작", "일정과 작업자를 배정하고 시스템을 통해 운영을 시작합니다."],
];
const faqs = [
  ["어떤 숙소를 관리할 수 있나요?", "숙소 수, 위치, 객실 구조, 체크인·체크아웃 일정에 따라 관리 가능 여부를 확인합니다. 여러 객실을 운영하는 호스트도 상담 가능합니다."],
  ["청소 완료 여부는 어떻게 확인하나요?", "객실별 완료 상태와 작업 사진, 체크리스트, 특이사항을 시스템 기록으로 확인할 수 있습니다."],
  ["침구도 함께 관리하나요?", "객실 일정에 맞춰 침구 수거, 세탁, 배포 흐름을 관리합니다. 운영 방식은 숙소별 조건에 따라 협의합니다."],
  ["비품이 부족하면 어떻게 하나요?", "현장에서 부족한 비품과 소모품을 확인해 호스트에게 전달합니다. 구매 및 발주는 호스트가 직접 진행합니다."],
  ["시설 문제가 발견되면 어떻게 하나요?", "현장에서 가능한 간단한 조치는 상황에 따라 대응하며, 전문 수리가 필요한 경우 AS 접수와 일정 조율을 지원합니다."],
  ["일정 변경이나 긴급 요청도 가능한가요?", "확정된 작업 일정과 현장 상황에 따라 가능한 범위를 확인해 안내합니다. 긴급 이슈는 담당 책임자가 상황을 확인한 뒤 대응 방법을 안내합니다."],
  ["비용은 어떻게 정해지나요?", "숙소 수, 위치, 객실 구조, 청소 범위, 침구 운영 방식, 일정 조건에 따라 상담 후 안내합니다."],
];

const showcaseImages = {
  cleanerReport: "/assets/images/landing/cleaner-report.jpg",
  butlerTasks: "/assets/images/landing/butler-tasks.jpg",
  settlement: "/assets/images/landing/settlement.jpg",
};

function ShowcaseImage({ type, title }) {
  if (type === "dashboard") {
    return <div className="showcase-media"><div className="showcase-placeholder">대시보드 화면 준비 중</div></div>;
  }

  return <div className="showcase-media"><img className="showcase-image" src={showcaseImages[type]} alt={`${title} 화면 예시`} /></div>;
}

export default function Home() {
  return <>
    <header className="floating-nav" aria-label="Tenacierge 내비게이션"><a className="brand" href="#hero" aria-label="Tenacierge 홈"><span className="brand-mark">T</span>Tenacierge</a><MobileNav /></header>
    <main>
      <section id="hero" className="section hero"><div><p className="eyebrow">숙소 현장 운영 관리</p><h1>체크아웃 후 다음 체크인까지,<br />숙소 현장을 관리합니다.</h1><p className="lead">청소, 침구, 검수, 비품 확인, 시설 이슈까지 다음 체크인을 위한 현장 업무를 하나의 흐름으로 관리합니다.</p><div className="actions"><a className="btn primary" href="#quote">우리 숙소도 관리 가능한지 확인하기</a><a className="btn" href="#process">운영 방식 살펴보기</a></div></div><div className="hero-card"><Icon name="key"/><strong>Cleaning · Linen · Inspection · Report</strong><p>호스트가 직접 방문하지 않아도 객실 상태와 작업 결과를 확인할 수 있도록 현장 업무를 연결합니다.</p></div></section>
      <section id="results" className="section two"><div><p className="eyebrow">Operation Records</p><h2>현장 업무 기록을 한눈에 확인하세요</h2><p>청소 완료 여부부터 사진, 체크리스트, 특이사항까지 객실별 작업 기록을 체계적으로 관리합니다.</p></div><CleaningCounter /></section>
      <section id="problems" className="section pain-section"><p className="eyebrow">Host Pain Points</p><h2>호스트가 직접 가지 않으면 놓치기 쉬운 일들이 있습니다.</h2><div className="pain-list">{problems.map(([icon,title,body], index) => <article className="pain-item" key={title}><span className="pain-number">{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{body}</p></div><Icon name={icon}/></article>)}</div></section>
      <section id="scope" className="section service-section"><p className="eyebrow">Service Scope</p><h2>다음 체크인을 위한 현장 흐름을 함께 관리합니다.</h2><div className="grid service-grid">{scopes.map(([icon,title,body]) => <article className="service-card" key={title}><Icon name={icon}/><h3>{title}</h3><p>{body}</p></article>)}</div></section>
      <section id="showcase" className="section"><p className="eyebrow">System</p><h2>완료 기록부터 현장 이슈와 비용까지 시스템에서 확인합니다.</h2><p>객실별 일정, 작업 상태, 완료 사진, 체크리스트, 비품 부족, 오염·파손·시설 이슈와 비용 내역을 한 흐름으로 확인할 수 있습니다.</p><div className="showcase-grid">{showcases.map(([key,title,body]) => <article className="showcase" key={key} data-image-key={key}><ShowcaseImage type={key} title={title}/><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></section>
      <section id="process" className="section"><p className="eyebrow">Process</p><h2>운영 조건을 먼저 확인한 뒤 시작합니다.</h2><ol className="timeline">{processSteps.map(([title,body]) => <li key={title}><strong>{title}</strong><p>{body}</p></li>)}</ol></section>
      <section id="faq" className="section"><p className="eyebrow">FAQ</p><h2>문의 전 자주 확인하는 내용</h2>{faqs.map(([q,a]) => <details className="faq" key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
      <section id="quote" className="section quote"><p className="eyebrow">Contact</p><h2>우리 숙소도 관리 가능한지 확인해 보세요.</h2><p>숙소 수, 위치, 객실 구조, 운영 일정을 알려주시면 가능한 업무 범위와 비용 기준을 안내해 드립니다.</p><div className="actions">{/* TODO: 실제 카카오채널 URL과 문의 채널이 확정되면 버튼 연결 */}<button className="btn primary" type="button" disabled>카카오톡으로 상담하기 · 준비 중</button><button className="btn" type="button" disabled>관리 가능 여부 문의하기 · 준비 중</button></div></section>
    </main>
  </>;
}
