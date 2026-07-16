import Icon from "../components/Icons.js";
import { CleaningCounter, MobileNav } from "../components/ClientWidgets.js";

const problems = ["객실이 늘수록 청소 일정과 완료 확인이 흩어집니다.", "비품 부족, 오염, 파손, 시설 문제는 현장에 가지 않으면 늦게 보입니다.", "침구 수거·세탁·배포와 청소·검수 사이의 누락을 줄여야 합니다."];
const scopes = [
  ["broom", "객실 청소", "체크아웃 이후 다음 체크인 전까지 객실 상태를 정리하고 완료 여부를 기록합니다."],
  ["linen", "침구 관리", "침구 수거, 세탁, 배포 흐름을 객실 일정에 맞춰 연결합니다."],
  ["calendar", "일정·작업자 배정", "여러 객실의 작업 일정과 담당자를 배정하고 진행 상태를 관리합니다."],
  ["checklist", "사진·체크리스트 기록", "완료 사진과 체크리스트로 청소 및 검수 결과를 남깁니다."],
  ["supply", "비품 부족 보고", "비품을 직접 구매·보충한다고 표현하지 않고, 부족 여부를 확인해 호스트에게 보고합니다."],
  ["tool", "시설 이슈 연계", "간단한 현장 조치가 가능한 경우 대응하고, 전문 수리는 AS 연계와 일정 조율을 중심으로 지원합니다."],
  ["receipt", "다객실 비용 관리", "숙소별 업무 건수와 비용 흐름을 확인할 수 있도록 기록합니다."],
  ["alert", "현장 이슈 책임 대응", "공식 24시간 서비스가 아닌, 긴급 상황과 현장 이슈에 대한 책임 대응 체계를 안내합니다."],
];
const showcases = [
  ["dashboard", "대시보드", "객실별 청소 진행 단계와 체크인 전 완료 상태를 한눈에 확인합니다."],
  ["cleanerReport", "완료 보고", "사진, 체크리스트, 오염·파손·시설 이상 기록을 함께 남깁니다."],
  ["butlerTasks", "업무 배정", "작업자 배정과 청소·검수 상태를 객실 단위로 관리합니다."],
  ["settlement", "정산", "숙소별 업무와 비용을 항목 단위로 확인하는 영역입니다."],
];
const faqs = [
  ["게스트 문의나 예약 관리를 대행하나요?", "아니요. 컨시어지강남은 게스트 응대, 예약, 가격, 플랫폼 운영이 아니라 숙소 현장 업무 관리에 집중합니다."],
  ["비품을 직접 구매해 주나요?", "비품·소모품 부족을 확인해 호스트에게 보고합니다. 구매와 상시 보충 서비스처럼 표현하지 않습니다."],
  ["시설 문제가 발견되면 어떻게 하나요?", "가능한 간단한 현장 조치는 상황에 따라 대응하고, 전문 수리가 필요한 경우 AS 접수와 일정 조율을 지원합니다."],
  ["여러 숙소도 가능한가요?", "숙소 수, 위치, 객실 구조와 일정에 따라 업무 범위와 배정 방식을 상담 후 정합니다."],
];

export default function Home() {
  return <>
    <header className="floating-nav"><a className="brand" href="#hero"><span className="brand-mark">T</span>Tenacierge</a><MobileNav /></header>
    <main>
      <section id="hero" className="section hero"><div><p className="eyebrow">숙소 현장 관리 서비스</p><h1>체크아웃 후 다음 체크인 전까지, 숙소 현장을 관리합니다.</h1><p className="lead">객실 청소와 침구 수거·세탁·배포부터 일정 배정, 검수 상태, 사진 기반 완료 기록, 비품 부족 및 시설 이슈 보고까지 하나의 흐름으로 관리합니다.</p><div className="actions"><a className="btn primary" href="#quote">관리 가능 여부 확인</a><a className="btn" href="#showcase">시스템 화면 보기</a></div></div><div className="hero-card"><Icon name="key"/><strong>Cleaning · Linen · Report</strong><p>호스트가 직접 방문하지 않아도 다음 체크인을 준비할 수 있도록 현장 업무를 연결합니다.</p></div></section>
      <section id="results" className="section two"><div><p className="eyebrow">Operating Proof</p><h2>확인 가능한 데이터만 표시합니다.</h2><p>누적 청소 건수는 API 정상 응답 시에만 표시하며, 실패 시 0건으로 오인되지 않게 처리합니다.</p></div><CleaningCounter /></section>
      <section id="problems" className="section"><p className="eyebrow">Host Pain Points</p><h2>호스트가 직접 가지 않으면 보이지 않는 일들이 있습니다.</h2><div className="cards">{problems.map((p, i) => <article className="card" key={p}><Icon name={["calendar","alert","laundry"][i]}/><p>{p}</p></article>)}</div></section>
      <section id="scope" className="section"><p className="eyebrow">Service Scope</p><h2>청소만이 아니라 다음 체크인에 필요한 현장 흐름을 관리합니다.</h2><div className="grid">{scopes.map(([icon,title,body]) => <article className="card" key={title}><Icon name={icon}/><h3>{title}</h3><p>{body}</p></article>)}</div></section>
      <section id="showcase" className="section"><p className="eyebrow">System Showcase</p><h2>현장 업무가 말로만 끝나지 않도록 기록합니다.</h2><div className="showcase-grid">{showcases.map(([key,title,body]) => <article className="showcase" key={key} data-image-key={key}><div className="placeholder"><span>{key}</span><small>개인정보 마스킹 후 실제 화면 이미지로 교체하세요.</small></div><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>{/* dashboard, cleanerReport, butlerTasks, settlement 이미지는 개인정보 마스킹 후 교체 */}</section>
      <section id="process" className="section"><p className="eyebrow">Process</p><h2>도입 전 운영 조건부터 맞춥니다.</h2><ol className="timeline"><li>사전 상담</li><li>업무 범위 논의</li><li>현장 조율</li><li>최종 확정 및 계약</li></ol></section>
      <section className="section two"><div><p className="eyebrow">Records & Reports</p><h2>관리 기록과 리포트로 다객실 운영을 정리합니다.</h2></div><div className="card"><Icon name="checklist"/><p>청소 및 검수 상태, 완료 사진, 체크리스트, 비품 부족 보고, 오염·파손·시설 문제와 후속 AS 일정 조율 내용을 남깁니다.</p></div></section>
      <section id="faq" className="section"><p className="eyebrow">FAQ</p><h2>문의 전 자주 확인하는 내용</h2>{faqs.map(([q,a]) => <details className="faq" key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
      <section id="quote" className="section quote"><p className="eyebrow">Contact</p><h2>직접 확인하기 어려운 숙소 현장, 컨시어지강남이 대신 관리합니다.</h2><p>숙소 수, 위치, 객실 구조와 운영 일정을 알려주시면 가능한 업무 범위와 견적 방식을 안내해 드립니다.</p><div className="actions"><a className="btn primary" href="mailto:hello@example.com">상담 문의</a><a className="btn" href="tel:010-0000-0000">전화 문의</a></div></section>
    </main>
  </>;
}
