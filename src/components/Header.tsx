"use client";

import { useEffect, useState } from "react";
import type { MouseEvent } from "react";

type HeaderProps = {
  onWorkClick: () => void;
};

export default function Header({ onWorkClick }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("work");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["work", "about", "contact"];
      const scrollPosition = window.scrollY + 150;

      let currentSection = "work";

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleWorkClick = (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    setActiveSection("work");
    closeMenu();

    onWorkClick();
  };

  const handleSectionClick = (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    const targetId = event.currentTarget
      .getAttribute("href")
      ?.replace("#", "");

    if (!targetId) {
      return;
    }

    setActiveSection(targetId);

    document
      .getElementById(targetId)
      ?.scrollIntoView({
        behavior: "smooth",
      });

    closeMenu();
  };

  return (
    <header className="site-header">
      <div className="site-brand">
        <a
          href="#"
          className="site-logo"
          onClick={closeMenu}
        >
          JÖRGEN TEREPSON
        </a>

        <img
          src="/signature/jorgen-signature.png"
          alt=""
          className="header-signature"
        />
      </div>

      <nav className="main-nav">
        <a
          href="#work"
          className={
            activeSection === "work" ? "active" : ""
          }
          onClick={handleWorkClick}
        >
          WORK
        </a>

        <a
          href="#about"
          className={
            activeSection === "about" ? "active" : ""
          }
          onClick={handleSectionClick}
        >
          ABOUT
        </a>

        <a
          href="#contact"
          className={
            activeSection === "contact" ? "active" : ""
          }
          onClick={handleSectionClick}
        >
          CONTACT
        </a>
      </nav>

      <button
        className="menu-button"
        aria-label={
          menuOpen ? "Close menu" : "Open menu"
        }
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "CLOSE" : "MENU"}
      </button>

      {menuOpen && (
        <nav className="mobile-menu">
          <a
            href="#work"
            className={
              activeSection === "work" ? "active" : ""
            }
            onClick={handleWorkClick}
          >
            WORK
          </a>

          <a
            href="#about"
            className={
              activeSection === "about" ? "active" : ""
            }
            onClick={handleSectionClick}
          >
            ABOUT
          </a>

          <a
            href="#contact"
            className={
              activeSection === "contact" ? "active" : ""
            }
            onClick={handleSectionClick}
          >
            CONTACT
          </a>
        </nav>
      )}
    </header>
  );
}