"use client";

import { useEffect } from "react";

export default function OperationProcessObserver() {
  useEffect(() => {
    const section = document.querySelector("[data-operation-process]");
    if (!section) return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      section.classList.add("is-active");
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        section.classList.add("is-active");
        observer.disconnect();
      }
    }, { threshold: 0.42 });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return null;
}
