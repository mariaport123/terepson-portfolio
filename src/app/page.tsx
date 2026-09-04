"use client";

import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import VideoCard from "@/components/VideoCard";
import Intro from "@/components/Intro";
import Header from "@/components/Header";
import CategoryFilter from "@/components/CategoryFilter";
import About from "@/components/About";
import Footer from "@/components/Footer";

type Project = (typeof projects)[number];

export default function Home() {
  const [selectedCategory, setSelectedCategory] =
    useState("ALL");

  const [introVisible, setIntroVisible] =
    useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIntroVisible(false);
    }, 2700);

    return () =>
      window.clearTimeout(timer);
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
        (project) =>
          project.category ===
          selectedCategory
      );

  return (
    <main>
      {/* =================================
          INTRO
      ================================= */}

      <Intro visible={introVisible} />

      {/* =================================
          PORTFOLIO
      ================================= */}

      <section className="portfolio">
        {/* =================================
            HEADER
        ================================= */}

        <Header />

        {/* =================================
            CATEGORIES
        ================================= */}

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* =================================
            WORK GRID
        ================================= */}

        <div className="work-grid">
          {filteredProjects.map(
            (project) => (
              <VideoCard
                key={project.number}
                project={project}
              />
            )
          )}
        </div>

        {/* =================================
            ABOUT
        ================================= */}

        <About />

        {/* =================================
            FOOTER
        ================================= */}

        <Footer />
      </section>
    </main>
  );
}