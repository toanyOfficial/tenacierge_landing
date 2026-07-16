import DataClient from "../../components/DataClient.js";
export const metadata = { title: "Tenacierge 데이터 조회" };
export default function DataPage() {
  return <><header className="data-topbar"><a className="brand" href="/"><span className="brand-mark">T</span>홈으로</a></header><main className="data-shell"><section className="data-panel"><p className="eyebrow">DATA API</p><h1>데이터 조회</h1><p><code>/api/data</code> 엔드포인트에서 서버 측 DB 집계 결과를 불러옵니다.</p><DataClient /></section></main></>;
}
