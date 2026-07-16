"use client";

import { useEffect, useState } from "react";

export default function DataResults() {
  const [state, setState] = useState({ status: "loading", items: [], message: "" });

  useEffect(() => {
    let isMounted = true;

    fetch("/api/data")
      .then((response) => response.json().then((payload) => ({ response, payload })))
      .then(({ response, payload }) => {
        if (!response.ok || !payload.ok) throw new Error(payload.message || "데이터 조회 실패");
        if (!isMounted) return;
        setState({ status: "ready", items: payload.items ?? [], totalCount: payload.totalCount, message: "" });
      })
      .catch((error) => {
        if (!isMounted) return;
        setState({ status: "error", items: [], message: error.message });
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (state.status === "loading") return <p>불러오는 중...</p>;
  if (state.status === "error") return <p className="error-message">{state.message}</p>;

  return (
    <>
      <article className="data-card">
        <h2>누적 업무 건수</h2>
        <p>{Number.isFinite(Number(state.totalCount)) ? Number(state.totalCount).toLocaleString("ko-KR") : "집계 중"}</p>
      </article>
      {state.items.map((item) => (
        <article className="data-card" key={item.id}>
          <h2>{item.name}</h2>
          <p>ID: {item.id}</p>
        </article>
      ))}
    </>
  );
}
