"use client";

type HeaderProps = {
  onWorkClick: () => void;
};

export default function Header({ onWorkClick }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="site-brand">
        <a
          href="#"
          className="site-logo"
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
          onClick={(event) => {
            event.preventDefault();
            onWorkClick();
          }}
        >
          WORK
        </a>

        <a href="#about">ABOUT</a>

        <a href="#contact">CONTACT</a>
      </nav>

      <button
        className="menu-button"
        aria-label="Open menu"
      >
        MENU
      </button>
    </header>
  );
}