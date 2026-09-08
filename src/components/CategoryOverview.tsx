"use client";

type CategoryOverviewProps = {
  onCategoryChange: (category: string) => void;
};

const categories = [
  {
    name: "COMMERCIALS",
    image: "/projects/commercials/commercial-06.jpg",
    className: "category-overview-large",
  },
  {
    name: "MUSIC VIDEOS",
    image: "/projects/musicvideos/music-9.jpg",
    className: "category-overview-small",
  },
  {
    name: "FILM",
    image: "/projects/films/film-01.jpg",
    className: "category-overview-film",
  },
  {
    name: "PORTRAITS",
    image: "projects/portraits/IMG_3236.JPG",
    className: "category-overview-portraits",
  },
  {
    name: "PRINTS",
    image: "/projects/prints/IMG_1813.PNG",
    className: "category-overview-prints",
  },
];

export default function CategoryOverview({
  onCategoryChange,
}: CategoryOverviewProps) {
  return (
    <div className="category-overview">
      {categories.map((category) => (
        <button
          key={category.name}
          type="button"
          className={`category-overview-card ${category.className}`}
          onClick={() => onCategoryChange(category.name)}
        >
          <img src={category.image} alt="" />

          <span className="category-overview-overlay" />

          <span className="category-overview-name">
            {category.name}
          </span>

          <span className="category-overview-arrow" aria-hidden="true">
            →
          </span>
        </button>
      ))}
    </div>
  );
}