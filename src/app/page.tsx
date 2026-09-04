"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const projects = [
  {
    number: "01",
    title: "BETSAFE X NUBLU X OTT TÄNAK TVC",
    category: "COMMERCIALS",
    role: "COSTUME DESIGNER",
    platform: "VIMEO",
    videoId: "764260078",
    videoUrl: "https://vimeo.com/764260078",
    thumbnail: "/projects/commercial-01.jpg",
    size: "large",
  },
  {
    number: "02",
    title: "Telia XMAS (Director's cut)",
    category: "COMMERCIALS",
    role: "STYLIST",
    platform: "VIMEO",
    videoId: "738537241",
    videoUrl: "https://vimeo.com/738537241",
    thumbnail: "/projects/commercial-02.jpg",
    size: "small",
  },
  {
    number: "03",
    title: "LIDL",
    category: "COMMERCIALS",
    role: "COSTUME DESIGNER",
    platform: "VIMEO",
    videoId: "773240651",
    videoUrl: "https://vimeo.com/773240651",
    thumbnail: "/projects/commercial-03.jpg",
    size: "small",
  },
  {
    number: "04",
    title: "Initiative Milch",
    category: "COMMERCIALS",
    role: "STYLIST",
    platform: "VIMEO",
    videoId: "976320503",
    videoUrl: "https://vimeo.com/976320503",
    thumbnail: "/projects/commercial-04.jpg",
    size: "large",
  },
  {
    number: "05",
    title: "Telia Greener Future Director's Cut",
    category: "COMMERCIALS",
    role: "STYLIST",
    year: "",
    platform: "VIMEO",
    videoId: "485485452",
    videoUrl: "https://vimeo.com/485485452",
    thumbnail: "/projects/commercial-05.jpg",
    size: "large",
  },
  {
    number: "06",
    title: "Memorieslab",
    category: "COMMERCIALS",
    role: "STYLIST",
    year: "",
    platform: "YOUTUBE",
    videoId: "zwFXqEnzXNY",
    videoUrl: "https://www.youtube.com/watch?v=zwFXqEnzXNY",
    thumbnail: "/projects/commercial-06.jpg",
    size: "small",
  },
  {
    number: "07",
    title: "Starman - Children",
    category: "COMMERCIALS",
    role: "STYLIST",
    year: "",
    platform: "YOUTUBE",
    videoId: "mD0uMYnJCaU",
    videoUrl: "https://www.youtube.com/watch?v=mD0uMYnJCaU",
    thumbnail: "/projects/commercial-07.jpg",
    size: "small",
  },
  {
    number: "08",
    title: "Starman - Film",
    category: "COMMERCIALS",
    role: "STYLIST",
    year: "Stylist",
    platform: "YOUTUBE",
    videoId: "njNdvgmAGm4",
    videoUrl: "https://www.youtube.com/watch?v=njNdvgmAGm4",
    thumbnail: "/projects/commercial-08.jpg",
    size: "large",
  },
  {
    number: "09",
    title: "Ibis Brandy",
    category: "COMMERCIALS",
    role: "STYLIST",
    platform: "YOUTUBE",
    videoId: "RIdRwOHjQxw",
    videoUrl: "https://www.youtube.com/watch?v=RIdRwOHjQxw",
    thumbnail: "/projects/commercial-09.jpg",
    size: "large",
  },
  {
    number: "10",
    title: "Aava Peili",
    category: "COMMERCIALS",
    role: "STYLIST",
    platform: "VIMEO",
    videoId: "643537019",
    videoUrl: "https://vimeo.com/643537019",
    thumbnail: "/projects/commercial-10.jpg",
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

          {project.role && (
            <p className="work-role">
              {project.role}
            </p>
          )}
        </div>

        <div className="work-meta">
          {project.year && <span>{project.year}</span>}

          <span>WATCH ↗</span>
        </div>
      </div>
    </motion.article>
  );
}

/* =================================
   ANIMATED SIGNATURE
================================= */

function AnimatedSignature() {
  return (
    <motion.img
      src="/signature/jorgen-signature.png"
      alt="Jörgen Terepson signature"
      className="intro-signature"
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      animate={{ clipPath: "inset(0 0% 0 0)" }}
      transition={{
        duration: 1.8,
        delay: 0.5,
        ease: "easeInOut",
      }}
    />
  );
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [introVisible, setIntroVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIntroVisible(false);
    }, 2700);

    return () => window.clearTimeout(timer);
  }, []);

  const categories = [
    "ALL",
    "COMMERCIALS",
    "MUSIC VIDEOS",
    "FILM",
    "PORTRAITS",
    "PRINTS",
  ];

  const filteredProjects =
    selectedCategory === "ALL"
      ? projects
      : projects.filter(
        (project) => project.category === selectedCategory
      );

  return (
    <main>
      {/* =================================
          INTRO
      ================================= */}

      <motion.section
        className={`intro ${!introVisible ? "intro-hidden" : ""
          }`}
      >
        <div className="intro-content">
          <h1 className="intro-title">
            TEREPSON
          </h1>

          <AnimatedSignature />
        </div>
      </motion.section>

      {/* =================================
          PORTFOLIO
      ================================= */}

      <section className="portfolio">
        {/* =================================
            HEADER
        ================================= */}

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
          <p className="work-heading">
            SELECTED WORK
          </p>

          <div className="categories">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  selectedCategory === category
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setSelectedCategory(category)
                }
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* =================================
            WORK GRID
        ================================= */}

        <div className="work-grid">
          {filteredProjects.map((project) => (
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

            <a href="mailto:terepson@gmail.com">
              terepson@gmail.com
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