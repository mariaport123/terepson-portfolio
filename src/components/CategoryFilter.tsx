"use client";

type CategoryFilterProps = {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="portfolio-intro" id="work">
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
              onCategoryChange(category)
            }
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}