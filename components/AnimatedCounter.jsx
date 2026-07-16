"use client";

import { useEffect, useRef, useState } from "react";

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export default function AnimatedCounter() {
  const [displayValue, setDisplayValue] = useState("집계 중");
  const [target, setTarget] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    fetch("/api/data")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load live cleaning count");
        return response.json();
      })
      .then((data) => {
        const count = Number(data.totalCount ?? data.count);
        if (!Number.isFinite(count)) throw new Error("Invalid count response");
        if (!isMounted) return;
        setTarget(count);
        setDisplayValue(count.toLocaleString("ko-KR"));
      })
      .catch((error) => {
        console.error(error);
        if (isMounted) {
          setTarget(null);
          setDisplayValue("집계 중");
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting || target === null || hasAnimated) return;

        const duration = 1300;
        const startTime = performance.now();
        const step = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Math.round(target * eased).toLocaleString("ko-KR"));
          if (progress < 1) requestAnimationFrame(step);
        };

        setHasAnimated(true);
        requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasAnimated, target]);

  return (
    <section className="result-counter-panel" aria-labelledby="result-count-label">
      <span className="metric-kicker">시스템 도입 이후 누적 청소</span>
      <strong ref={counterRef} id="live-cleaning-count" className="result-count-number" data-target={target ?? undefined}>
        {displayValue}
      </strong>
      <p id="result-count-label" className="result-count-summary">{formatDate(new Date())} 기준</p>
    </section>
  );
}
