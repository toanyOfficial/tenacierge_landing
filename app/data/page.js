import DataClient from "../../components/DataClient.js";
export const metadata = { title: "Tenacierge 데이터 조회" };
export default function DataPage() {
  return <><header className="data-topbar"><a className="brand" href="/" aria-label="Tenacierge 홈으로 이동"><span className="brand-mark">T</span>Tenacierge</a></header><main className="data-shell"><section className="data-panel"><p className="eyebrow">운영 기록</p><h1>데이터 조회</h1><p>Tenacierge 운영 기록의 집계 결과를 확인합니다.</p><DataClient /></section></main></>;
}
