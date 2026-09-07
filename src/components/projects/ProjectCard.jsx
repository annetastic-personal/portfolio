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
      className="btn btn-sm text-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2"
    >
      {label}
    </a>
  );
}

export default function ProjectCard({ project }) {
  const liveLink = renderActionLink(project.links.live, "Live");
  const sourceLink = renderActionLink(project.links.source, "Source");

  return (
    <article className="card card-lg w-full border border-border-subtle bg-surface-card shadow-sm">
      <figure className="w-full">
        <img
          src={project.coverImage.src}
          alt={project.coverImage.alt}
          className="mx-auto h-auto max-w-full"
        />
      </figure>
      <div className="card-body min-w-0">
        <h3 className="card-title font-heading text-project-title font-bold text-surface-emphasis">
          {project.title}
        </h3>
        <p>{project.summary}</p>
        <p>Technologies: {project.technologies.join(", ")}</p>
        <div className="card-actions mt-2">
          <Link
            to={`/projects/${project.slug}`}
            className="btn btn-sm btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2"
          >
            Details
          </Link>
          {liveLink}
          {sourceLink}
        </div>
      </div>
    </article>
  );
}
