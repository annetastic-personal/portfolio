import { Link } from "react-router-dom";

// Renders an external action link only when a URL is provided
function renderActionLink(url, label) {
  if (!url) {
    return null;
  }

  return (
    <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm">
      {label}
    </a>
  );
}

export default function ProjectCard({ project }) {
  const [firstImage] = project.images;

  let statusMessage = null;
  if (project.projectStatus.message) {
    statusMessage = <p>{project.projectStatus.message}</p>;
  }

  const liveLink = renderActionLink(project.links.live, "Live");
  const sourceLink = renderActionLink(project.links.source, "Source");

  return (
    <article className="card card-lg card-side w-full bg-brand-tertiary/10 shadow-sm">
      <div className="card-body min-w-0">
        <h3 className="card-title">{project.title}</h3>
        <p>{project.summary}</p>
        <p>Technologies: {project.technologies.join(", ")}</p>
        <p>Status: {project.projectStatus.type}</p>
        {statusMessage}
        <div className="card-actions mt-2">
          <Link
            to={`/projects/${project.slug}`}
            className="btn btn-sm btn-primary"
          >
            Details
          </Link>
          {liveLink}
          {sourceLink}
        </div>
      </div>
      <figure className="aspect-video w-1/2 min-w-0 shrink-0 overflow-hidden">
        <img
          src={firstImage.src}
          alt={firstImage.alt}
          className="h-full w-full object-contain"
        />
      </figure>
    </article>
  );
}
