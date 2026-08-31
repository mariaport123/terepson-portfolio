"use client";

import { motion } from "motion/react";

const projects = [
  {
    number: "01",
    title: "BETSAFE X NUBLU X OTT TÄNAK TVC",
    category: "COMMERCIALS",
    year: "",
    platform: "VIMEO",
    videoId: "764260078",
    videoUrl: "https://vimeo.com/764260078",
    thumbnail: "/projects/commercial-01.jpg",
    size: "large",
  },
  {
    number: "02",
    title: "PROJECT 02",
    category: "COMMERCIALS",
    year: "",
    platform: "VIMEO",
    videoId: "738537241",
    videoUrl: "https://vimeo.com/738537241",
    size: "small",
  },
  {
    number: "03",
    title: "PROJECT 03",
    category: "COMMERCIALS",
    year: "",
    platform: "VIMEO",
    videoId: "773240651",
    videoUrl: "https://vimeo.com/773240651",
    size: "small",
  },
  {
    number: "04",
    title: "PROJECT 04",
    category: "COMMERCIALS",
    year: "",
    platform: "VIMEO",
    videoId: "976320503",
    videoUrl: "https://vimeo.com/976320503",
    size: "large",
  },
  {
    number: "05",
    title: "PROJECT 05",
    category: "COMMERCIALS",
    year: "",
    platform: "VIMEO",
    videoId: "485485452",
    videoUrl: "https://vimeo.com/485485452",
    size: "small",
  },
  {
    number: "06",
    title: "PROJECT 06",
    category: "COMMERCIALS",
    year: "",
    platform: "YOUTUBE",
    videoId: "zwFXqEnzXNY",
    videoUrl: "https://www.youtube.com/watch?v=zwFXqEnzXNY",
    size: "large",
  },
  {
    number: "07",
    title: "PROJECT 07",
    category: "COMMERCIALS",
    year: "",
    platform: "YOUTUBE",
    videoId: "mD0uMYnJCaU",
    videoUrl: "https://www.youtube.com/watch?v=mD0uMYnJCaU",
    size: "small",
  },
  {
    number: "08",
    title: "PROJECT 08",
    category: "COMMERCIALS",
    year: "",
    platform: "YOUTUBE",
    videoId: "njNdvgmAGm4",
    videoUrl: "https://www.youtube.com/watch?v=njNdvgmAGm4",
    size: "small",
  },
  {
    number: "09",
    title: "PROJECT 09",
    category: "COMMERCIALS",
    year: "",
    platform: "YOUTUBE",
    videoId: "RIdRwOHjQxw",
    videoUrl: "https://www.youtube.com/watch?v=RIdRwOHjQxw",
    size: "large",
  },
  {
    number: "10",
    title: "PROJECT 10",
    category: "COMMERCIALS",
    year: "",
    platform: "VIMEO",
    videoId: "643537019",
    videoUrl: "https://vimeo.com/643537019",
    size: "small",
  },
];

function VideoCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <motion.article
      className={`work-item work-item-${project.size}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      <a
        href={project.videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="video-card"
        aria-label={`Watch ${project.title}`}
      >
        <div className="video-thumbnail">
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={project.title}
              className="thumbnail-image"
            />
          ) : (
            <div className="thumbnail-placeholder">
              <span>{project.number}</span>
            </div>
          )}

          <div className="play-button">
            <span>PLAY</span>
            <span className="play-arrow">↗</span>
          </div>
        </div>
      </a>

      <div className="work-info">
        <div>
          <span>{project.category}</span>

          <h3>{project.title}</h3>
        </div>

        <div className="work-meta">
          {project.year && <span>{project.year}</span>}

          <span>WATCH ↗</span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Home() {
  return (
    <main>
      {/* =================================
          INTRO
      ================================= */}

      <section className="intro">
        <div className="intro-content">
          <h1 className="intro-title">
            TEREPSON
          </h1>

          <button className="enter">
            ENTER
            <span aria-hidden="true" />
          </button>
        </div>
      </section>

      {/* =================================
          PORTFOLIO
      ================================= */}

      <section className="portfolio">
        {/* =================================
            HEADER
        ================================= */}

        <header className="site-header">
          <a
            href="#"
            className="site-logo"
          >
            TEREPSON
          </a>

          <nav className="main-nav">
            <a href="#work">WORK</a>
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

        {/* =================================
            CATEGORIES
        ================================= */}

        <div
          className="portfolio-intro"
          id="work"
        >
          <div className="categories">
            <button className="active">
              ALL
            </button>

            <button>
              COMMERCIALS
            </button>

            <button>
              MUSIC VIDEOS
            </button>

            <button>
              FILM
            </button>

            <button>
              PORTRAITS
            </button>

            <button>
              PRINTS
            </button>
          </div>
        </div>

        {/* =================================
            WORK GRID
        ================================= */}

        <div className="work-grid">
          {projects.map((project) => (
            <VideoCard
              key={project.number}
              project={project}
            />
          ))}
        </div>

        {/* =================================
            ABOUT
        ================================= */}

        <section
          className="about"
          id="about"
        >
          <p className="section-label">
            ABOUT
          </p>

          <div>
            <h2>
              JÖRGEN
              <br />
              TEREPSON
            </h2>

            <p className="about-text">
              Fashion stylist and visual
              creative working across
              fashion, film, music and
              commercial imagery.
            </p>
          </div>
        </section>

        {/* =================================
            FOOTER
        ================================= */}

        <footer
          className="site-footer"
          id="contact"
        >
          <div>
            <p className="section-label">
              CONTACT
            </p>

            <a href="mailto:hello@terepson.com">
              hello@terepson.com
            </a>
          </div>

          <span>
            TEREPSON © 2026
          </span>
        </footer>
      </section>
    </main>
  );
}