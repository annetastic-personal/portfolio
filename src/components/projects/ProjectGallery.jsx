import { useState } from "react";

export default function ProjectGallery({ project }) {
  const slides = project.images ?? [];
  // Keep the selected image in React state so navigation does not change the
  // page URL or scroll the project details page.
  const [activeIndex, setActiveIndex] = useState(0);

  if (slides.length === 0) {
    return <p>No project images are available.</p>;
  }

  return (
    <div
      aria-label={`${project.title} project gallery`}
      className="flex flex-col gap-3"
    >
      <div className="project-gallery-frame">
        {slides.length > 1 && (
          <button
            type="button"
            aria-label={`Previous image for ${project.title}`}
            className="btn btn-circle shrink-0"
            onClick={() =>
              setActiveIndex((currentIndex) =>
                currentIndex === 0 ? slides.length - 1 : currentIndex - 1,
              )
            }
          >
            &#10094;
          </button>
        )}
        <div className="project-gallery-stage">
          <img
            src={slides[activeIndex].src}
            alt={slides[activeIndex].alt}
            className="project-gallery-image"
          />
        </div>
        {slides.length > 1 && (
          <button
            type="button"
            aria-label={`Next image for ${project.title}`}
            className="btn btn-circle shrink-0"
            onClick={() =>
              setActiveIndex((currentIndex) =>
                currentIndex === slides.length - 1 ? 0 : currentIndex + 1,
              )
            }
          >
            &#10095;
          </button>
        )}
      </div>
      {slides.length > 1 && (
        <nav
          aria-label={`${project.title} gallery slides`}
          className="flex justify-center gap-2"
        >
          {/* Direct slide buttons avoid browser fragment navigation. */}
          {slides.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Show image ${index + 1} of ${slides.length}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className="btn btn-xs btn-circle"
              onClick={() => setActiveIndex(index)}
            >
              {index + 1}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}
