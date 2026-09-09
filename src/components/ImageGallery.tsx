"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ImageGalleryProps = {
  images: string[];
  variant?: "portraits" | "prints";
};

export default function ImageGallery({
  images,
  variant = "portraits",
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <>
      <div className={`image-gallery image-gallery-${variant}`}>
        {images.map((src, index) => (
          <button
            type="button"
            className="gallery-image"
            key={src}
            onClick={() => setSelectedImage(src)}
            aria-label="Open image"
          >
            <Image
              src={src}
              alt=""
              width={1600}
              height={1200}
              loading={index < 3 ? "eager" : "lazy"}
              sizes="(max-width: 700px) 100vw, 33vw"
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="image-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            ×
          </button>

          <Image
            src={selectedImage}
            alt=""
            width={2000}
            height={2000}
            className="image-lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}