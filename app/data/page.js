import DataResults from "../../components/DataResults.jsx";

export const metadata = {
  title: "컨시어지강남 데이터 조회",
  description: "Next.js Route Handler로 이전한 데이터 API 결과를 확인하는 페이지입니다.",
};

export default function DataPage() {
  return (
    <main className="data-page">
      <header className="data-topbar">
        <a className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">T</span>
          <span>홈으로</span>
        </a>
      </header>
      <section className="data-shell">
        <div className="data-panel">
          <p className="eyebrow">DATA API</p>
          <h1>데이터 조회</h1>
          <p>서버의 <code>/api/data</code> 엔드포인트에서 조회한 결과를 표시합니다.</p>
          <div className="data-results" aria-live="polite">
            <DataResults />
          </div>
        </div>
      </section>
    </main>
  );
}
