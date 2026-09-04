"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { projects } from "@/data/projects";

type Project = (typeof projects)[number];

type YouTubeMetadata = {
  title: string;
  thumbnail: string;
  author: string;
};

export default function VideoCard({
  project,
}: {
  project: Project;
}) {
  const [metadata, setMetadata] =
    useState<YouTubeMetadata | null>(null);

  useEffect(() => {
    if (project.platform !== "YOUTUBE") {
      return;
    }

    let cancelled = false;

    async function loadMetadata() {
      try {
        const response = await fetch(
          `/api/youtube?id=${project.videoId}`
        );

        if (!response.ok) {
          return;
        }

        const data =
          (await response.json()) as YouTubeMetadata;

        if (!cancelled) {
          setMetadata(data);
        }
      } catch {
        // Keep the card usable even if metadata cannot be loaded.
      }
    }

    loadMetadata();

    return () => {
      cancelled = true;
    };
  }, [project.platform, project.videoId]);

  const title =
    project.platform === "YOUTUBE"
      ? metadata?.title || "MUSIC VIDEO"
      : project.title;

  const thumbnail =
    project.thumbnail ||
    (project.platform === "YOUTUBE"
      ? metadata?.thumbnail
      : "") ||
    "";

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
        aria-label={`Watch ${title}`}
      >
        <div className="video-thumbnail">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
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

          <h3>{title}</h3>

          {project.role && (
            <p className="work-role">
              {project.role}
            </p>
          )}
        </div>

        <div className="work-meta">
          {project.year && (
            <span>{project.year}</span>
          )}

          <span>WATCH ↗</span>
        </div>
      </div>
    </motion.article>
  );
}