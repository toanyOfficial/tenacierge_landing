"use client";
import { useEffect, useState } from "react";
export default function DataClient() {
  const [state, setState] = useState({ status: "loading" });
  useEffect(() => {
    fetch("/api/data").then(async (res) => {
      const payload = await res.json();
      if (!res.ok || !payload.ok) throw new Error("현재 집계 정보를 불러오는 중입니다.");
      setState({ status: "ready", totalCount: Number(payload.totalCount), items: payload.items ?? [] });
    }).catch((error) => setState({ status: "error", message: error.message }));
  }, []);
  if (state.status === "loading") return <p>집계 중입니다.</p>;
  if (state.status === "error") return <p className="error-message">{state.message}</p>;
  return <div className="data-card"><span>누적 청소 완료 건수</span><strong>{state.totalCount.toLocaleString("ko-KR")}건</strong><p>기록 항목 {state.items.length}개</p></div>;
}
