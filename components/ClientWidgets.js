"use client";

import { useEffect, useRef, useState } from "react";

const LEGACY_CLEANING_COUNT = 0;
const SYSTEM_START_DATE = "2026-07-21";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const navRef = useRef(null);
  const links = [["#results","기록"],["#problems","고민"],["#scope","서비스"],["#showcase","시스템"],["#process","절차"],["#faq","FAQ"]];
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
    if (!active) {
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

  return <strong ref={ref}><span className="stat-number">{displayValue.toLocaleString("ko-KR")}</span><span className="stat-unit">건</span></strong>;
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

  const today = new Date().toISOString().slice(0, 10);
  const isReady = state.status === "ready";

  return <div className="records-stats" aria-live="polite">
    <section className="record-stat legacy"><span>시스템 도입 이전</span><h3>현장 누적 청소 건수</h3><AnimatedStatNumber value={LEGACY_CLEANING_COUNT} active /><p>시스템 도입 전 현장 기록 기준</p></section>
    <section className={`record-stat live ${isReady ? "" : "is-pending"}`}><span>시스템 도입 이후</span><h3>실시간 누적 청소 건수</h3>{isReady ? <AnimatedStatNumber value={Number(state.count)} active prominent /> : <strong>집계 중</strong>}<p>{SYSTEM_START_DATE} 시스템 도입 · {today} 기준</p></section>
  </div>;
}
