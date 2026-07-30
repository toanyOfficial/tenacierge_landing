"use client";

import { useEffect, useRef, useState } from "react";

const SYSTEM_START_DATE = "2026-07-21";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const navRef = useRef(null);
  const links = [["#records","기록"],["#solutions","변화"],["#evidence","관리 화면"],["#services","운영 방식"],["#process","시작 절차"],["#faq","FAQ"]];
  const menuLabel = open ? "메뉴 닫기" : "메뉴 열기";

  useEffect(() => {
    if (!open) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") setOpen(false);
    }

    function handlePointerDown(event) {
      if (buttonRef.current?.contains(event.target) || navRef.current?.contains(event.target)) return;
      setOpen(false);
    }

    function handleResize() {
      if (window.innerWidth > 900) setOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  return <>
    <button ref={buttonRef} className="menu-toggle" type="button" aria-label={menuLabel} aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen((current) => !current)}><span/><span className="sr-only">{menuLabel}</span></button>
    <nav ref={navRef} id="primary-nav" className={`desktop-nav ${open ? "is-open" : ""}`} aria-label="Tenacierge 주요 섹션 이동">
      {links.map(([href,label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-cta" href="#quote" onClick={() => setOpen(false)}>상담하기</a>
    </nav>
  </>;
}

export function ShowcaseModalImage({ src, title }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const openerRef = useRef(null);

  function restorePage() {
    document.body.style.overflow = "";
    openerRef.current?.focus();
  }

  function openDialog(event) {
    openerRef.current = event.currentTarget;
    document.body.style.overflow = "hidden";
    dialogRef.current?.showModal();
    requestAnimationFrame(() => closeButtonRef.current?.focus());
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  function handleDialogClick(event) {
    if (event.target === dialogRef.current) closeDialog();
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;
    dialog.addEventListener("close", restorePage);
    dialog.addEventListener("cancel", restorePage);
    return () => {
      dialog.removeEventListener("close", restorePage);
      dialog.removeEventListener("cancel", restorePage);
      document.body.style.overflow = "";
    };
  }, []);

  return <>
    <button className="showcase-media is-expandable" type="button" onClick={openDialog} aria-label={`${title} 전체 화면 보기`}>
      <img className="showcase-image" src={src} alt={`${title} 화면 예시`} />
    </button>
    <dialog className="showcase-dialog" ref={dialogRef} aria-label={`${title} 전체 화면`} onClick={handleDialogClick}>
      <div className="showcase-dialog-content" onClick={(event) => event.stopPropagation()}>
        <button ref={closeButtonRef} className="showcase-dialog-close" type="button" onClick={closeDialog} aria-label="확대 이미지 닫기">닫기</button>
        <img className="showcase-dialog-image" src={src} alt={`${title} 전체 화면 예시`} />
      </div>
    </dialog>
  </>;
}

function AnimatedStatNumber({ value, active = true, prominent = false }) {
  const [displayValue, setDisplayValue] = useState(active ? 0 : value);
  const ref = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!active || hasAnimatedRef.current) {
      setDisplayValue(value);
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDisplayValue(value);
      hasAnimatedRef.current = true;
      return undefined;
    }

    function runCountUp() {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;
      const duration = prominent ? 1500 : 1250;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.round(value * eased));
        if (progress < 1) requestAnimationFrame(tick);
        else setDisplayValue(value);
      }

      requestAnimationFrame(tick);
    }

    const node = ref.current;
    if (!node) {
      setDisplayValue(value);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        runCountUp();
        observer.disconnect();
      }
    }, { threshold: 0.35 });

    observer.observe(node);
    return () => observer.disconnect();
  }, [active, prominent, value]);

  return <strong ref={ref} aria-hidden="true"><span className="stat-number">{displayValue.toLocaleString("ko-KR")}</span><span className="stat-unit">건</span></strong>;
}

function getOperationStatusClass(status) {
  if (status === "검수 완료") return "is-supervised";
  if (status === "청소 완료") return "is-cleaned";
  return "is-progress";
}

function RecentOperationList({ operations, duplicate = false, sourceLength = operations.length }) {
  return <ul className="record-conveyor-list" aria-hidden={duplicate || undefined}>
    {operations.map((operation, index) => {
      const timeDetails = [operation.checkoutTime && `체크아웃 ${operation.checkoutTime}`, operation.completedTime && `완료 ${operation.completedTime}`].filter(Boolean).join(" · ");
      return <li className={`record-operation ${getOperationStatusClass(operation.status)}`} data-status={operation.status} aria-hidden={!duplicate && index >= sourceLength ? "true" : undefined} key={`${duplicate ? "copy-" : ""}${operation.roomAlias}-${operation.workDate}-${index}`}>
      <span className="record-operation-status">{operation.status}</span>
      <strong>{operation.roomAlias}</strong>
      {operation.workDate ? <time dateTime={operation.workDate}>{operation.workDate}</time> : null}
      {timeDetails ? <small>{timeDetails}</small> : null}
    </li>})}
  </ul>;
}

export function CleaningCounter() {
  const [state, setState] = useState({ status: "loading", data: null });
  const requestInFlightRef = useRef(false);

  useEffect(() => {
    let active = true;
    let intervalId;

    async function loadRecords() {
      if (requestInFlightRef.current) return;
      requestInFlightRef.current = true;
      try {
        const res = await fetch("/api/data", { cache: "no-store" });
        const payload = await res.json();
        if (!res.ok || !payload.ok) throw new Error(payload.message || "집계 실패");
        if (active) setState({ status: "ready", data: payload });
      } catch {
        if (active) setState((current) => current.data ? current : { status: "error", data: null });
      } finally {
        requestInFlightRef.current = false;
      }
    }

    function startPolling() {
      window.clearInterval(intervalId);
      if (document.visibilityState !== "visible") return;
      loadRecords();
      intervalId = window.setInterval(loadRecords, 60_000);
    }

    function handleVisibilityChange() {
      if (document.visibilityState === "visible") startPolling();
      else window.clearInterval(intervalId);
    }

    startPolling();
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      active = false;
      window.clearInterval(intervalId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const isReady = state.status === "ready" && state.data;
  const recordCount = state.data?.recordCount;
  const recentOperations = Array.isArray(state.data?.recentOperations)
    ? state.data.recentOperations
    : state.data?.items ?? [];
  const conveyorOperations = recentOperations.length > 0
    ? Array.from({ length: Math.max(1, Math.ceil(6 / recentOperations.length)) }, () => recentOperations).flat()
    : [];

  return <div className="records-stats" data-system-start-date={SYSTEM_START_DATE}>
    <h2 className="sr-only">누적 업무 기록</h2>
    <div className="record-meta"><span>{recordCount ? `시스템 도입 이전 기록 ${Number(recordCount.preSystem).toLocaleString("ko-KR")}건` : "시스템 도입 이전 기록 집계 중"}</span>{state.data?.asOfDate ? <time dateTime={state.data.asOfDate}>{state.data.asOfDate} 기준</time> : <span>기준일 확인 중</span>}</div>
    <div className="record-summary"><p className="record-caption">누적 업무 기록</p><div className={`record-total ${isReady ? "" : "is-pending"}`}>{isReady ? <AnimatedStatNumber value={Number(recordCount.total)} active prominent /> : <strong className="record-loading" aria-hidden="true">집계 중</strong>}</div><p className="record-scope">실시간 반영</p></div>
    {isReady && recentOperations.length > 0 ? <div className="record-conveyor-group"><h3>최근 반영된 객실 기록</h3><div className="record-conveyor" aria-label="최근 업무 기록"><div className="record-conveyor-track"><RecentOperationList operations={conveyorOperations} sourceLength={recentOperations.length}/><RecentOperationList operations={conveyorOperations} duplicate /></div></div></div> : null}
    {isReady && recentOperations.length === 0 ? <p className="record-empty">표시할 최근 업무가 없습니다.</p> : null}
    {state.status === "error" ? <p className="record-empty">최근 운영 기록을 불러오지 못했습니다.</p> : null}
    <p className="sr-only" aria-live="polite">{isReady ? `누적 업무 기록 ${Number(recordCount.total).toLocaleString("ko-KR")}건` : "누적 업무 기록 집계 중"}</p>
  </div>;
}
