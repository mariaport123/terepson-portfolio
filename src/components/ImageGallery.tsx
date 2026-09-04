"use client";

type ImageGalleryProps = {
  images: string[];
  variant?: "portraits" | "prints";
};

export default function ImageGallery({
  images,
  variant = "portraits",
}: ImageGalleryProps) {
  return (
    <div className={`image-gallery image-gallery-${variant}`}>
      {images.map((src, index) => (
        <div className="gallery-image" key={src}>
          <img
            src={src}
            alt=""
            loading={index < 6 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </div>
  );
}