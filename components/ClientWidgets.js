"use client";

import { useEffect, useState } from "react";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const links = [["#results","기록"],["#problems","고민"],["#scope","서비스"],["#showcase","시스템"],["#process","절차"],["#faq","FAQ"]];
  return <>
    <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}><span/><span className="sr-only">메뉴 열기</span></button>
    <nav id="primary-nav" className={`desktop-nav ${open ? "is-open" : ""}`} aria-label="Tenacierge 주요 섹션 이동">
      {links.map(([href,label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-cta" href="#quote" onClick={() => setOpen(false)}>상담하기</a>
    </nav>
  </>;
}

export function CleaningCounter() {
  const [state, setState] = useState({ status: "loading", count: null });
  useEffect(() => {
    let active = true;
    fetch("/api/data").then(async (res) => {
      const payload = await res.json();
      if (!res.ok || !payload.ok) throw new Error(payload.message || "집계 실패");
      if (active) setState({ status: "ready", count: Number(payload.totalCount) });
    }).catch(() => active && setState({ status: "error", count: null }));
    return () => { active = false; };
  }, []);
  const today = new Intl.DateTimeFormat("ko-KR", { dateStyle: "medium" }).format(new Date());
  const isReady = state.status === "ready";
  return <section className={`metric-card ${isReady ? "" : "is-pending"}`} aria-live="polite"><span>누적 청소 완료 건수</span><strong>{isReady ? `${state.count.toLocaleString("ko-KR")}건` : "집계 중"}</strong><p>{today} 기준</p></section>;
}
