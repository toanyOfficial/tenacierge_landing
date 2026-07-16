"use client";

import { useEffect, useState } from "react";

const navItems = [
  ["hero", "홈"],
  ["results", "실적"],
  ["problems", "문제"],
  ["scope", "범위"],
  ["showcase", "화면"],
  ["operations", "운영체계"],
  ["faq", "FAQ"],
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("[data-observe-section]");
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries.find((entry) => entry.isIntersecting);
        if (activeEntry) setActiveId(activeEntry.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", isOpen);
    return () => document.body.classList.remove("nav-open");
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="floating-nav" aria-label="랜딩페이지 내비게이션">
      <a className="brand nav-link" href="#hero" data-section="hero" aria-label="컨시어지강남 홈으로 이동" onClick={closeMenu}>
        <span className="brand-mark" aria-hidden="true">T</span>
        <span>Tenacierge</span>
      </a>
      <button className="menu-toggle" type="button" aria-expanded={isOpen} aria-controls="primary-nav" onClick={() => setIsOpen((value) => !value)}>
        <span className="menu-toggle-line" aria-hidden="true" />
        <span className="sr-only">메뉴 열기</span>
      </button>
      <nav id="primary-nav" className="desktop-nav" aria-label="주요 섹션 이동">
        {navItems.map(([id, label]) => (
          <a key={id} className={`nav-link${activeId === id ? " is-active" : ""}`} href={`#${id}`} data-section={id} onClick={closeMenu}>
            {label}
          </a>
        ))}
        <a className={`nav-link nav-cta${activeId === "quote" ? " is-active" : ""}`} href="#quote" data-section="quote" onClick={closeMenu}>
          상담하기
        </a>
      </nav>
    </header>
  );
}
