import { Link } from "react-router-dom";

// Renders an external action link only when a URL is provided
function renderActionLink(url, label) {
  if (!url) {
    return null;
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="btn btn-sm text-link"
    >
      {label}
    </a>
  );
}

export default function ProjectCard({ project, className = "" }) {

  return (
    <article
      className={`card w-full max-w-xs rounded-none bg-page-background shadow-2xl shadow-black/40 ${className}`}
    >
      <h3 className="card-title px-4 pt-4 pb-4">
        {project.title}
      </h3>
      <figure className="w-full px-4">
        <img
          src={project.coverImage.src}
          alt={project.coverImage.alt}
          className="mx-auto h-auto max-w-full"
        />
      </figure>
      <div className="card-body min-w-0 px-4">
        <p className="w-full border-t border-border-emphasis pt-2">
          <i className="text-surface-emphasis">
            {project.technologies.join(", ")}
          </i>
        </p>
        <div className="card-actions mt-2 justify-end">
          <Link to={`/projects/${project.slug}`}>
            See More
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 10 10"
              strokeWidth="1"
              className="ml-1 inline-block h-3 w-3 fill-link/20 stroke-link align-middle"
            >
              <polygon points="1,1 9,5 1,9" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
