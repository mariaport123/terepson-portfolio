"use client";

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
            <img
              src={src}
              alt=""
              loading={index < 6 ? "eager" : "lazy"}
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

          <img
            src={selectedImage}
            alt=""
            className="image-lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}