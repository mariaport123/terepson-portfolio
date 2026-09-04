"use client";

import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import VideoCard from "@/components/VideoCard";
import Intro from "@/components/Intro";
import Header from "@/components/Header";
import CategoryFilter from "@/components/CategoryFilter";
import ImageGallery from "@/components/ImageGallery";
import About from "@/components/About";
import Footer from "@/components/Footer";

const portraitImages = [
  "/projects/portraits/IMG_3236.JPG",
  "/projects/portraits/192831E3-0B8B-4AB1-8DB4-08CEB0EA0632.jpg",
  "/projects/portraits/541D6D4C-2010-49AE-9D93-74C8D0753EDE.JPG",
  "/projects/portraits/469098156_18479221873002071_6245232464884931852_n.JPG",
  "/projects/portraits/IMG_1450.JPG",
  "/projects/portraits/IMG_0039.JPG",
  "/projects/portraits/IMG_1957.JPG",
  "/projects/portraits/IMG_1958.PNG",
  "/projects/portraits/IMG_1225.PNG",
  "/projects/portraits/IMG_2810.PNG",
  "/projects/portraits/IMG_2811.PNG",
  "/projects/portraits/IMG_3237.JPG",
  "/projects/portraits/IMG_3238.PNG",
  "/projects/portraits/Snapinsta.app_469096868_1743693516364895_3372938380387957484_n_1080.JPG",
  "/projects/portraits/Snapinsta.app_469196019_1580737449224435_4308907313570392572_n_1080.JPG",
  "/projects/portraits/IMG_0246.JPG",
  "/projects/portraits/IMG_0249.JPG",
];

const printImages = [
  "/projects/prints/IMG_1813.PNG",
  "/projects/prints/IMG_1814.PNG",
  "/projects/prints/IMG_1815.PNG",
  "/projects/prints/IMG_1816.PNG",
  "/projects/prints/IMG_1819.PNG",
  "/projects/prints/IMG_1820.PNG",
  "/projects/prints/IMG_1821.PNG",
];

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

  const showVideoProjects =
    selectedCategory === "ALL" ||
    selectedCategory === "COMMERCIALS" ||
    selectedCategory === "MUSIC VIDEOS" ||
    selectedCategory === "FILM";

  const showPortraits =
    selectedCategory === "ALL" ||
    selectedCategory === "PORTRAITS";

  const showPrints =
    selectedCategory === "ALL" ||
    selectedCategory === "PRINTS";

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
            VIDEO WORK
        ================================= */}

        {showVideoProjects && (
          <div className="work-grid">
            {filteredProjects.map((project) => (
              <VideoCard
                key={project.number}
                project={project}
              />
            ))}
          </div>
        )}

        {/* =================================
            PORTRAITS
        ================================= */}

        {showPortraits && (
          <ImageGallery
            images={portraitImages}
            variant="portraits"
          />
        )}

        {/* =================================
            PRINTS
        ================================= */}

        {showPrints && (
          <ImageGallery
            images={printImages}
            variant="prints"
          />
        )}

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