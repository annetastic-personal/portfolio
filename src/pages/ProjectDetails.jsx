import { useParams } from "react-router-dom";
import projects from "../data/projects";
import ProjectGallery from "../components/projects/ProjectGallery";

export default function ProjectDetails() {
  const { projectSlug } = useParams();

  const project = projects.find((candidate) => candidate.slug === projectSlug);

  if (!project) {
    return <p>Project not found.</p>;
  }

  function ProjectList({ items, compact = false }) {
    return (
      <ul
        className={`mb-4 list-disc pl-5 ${compact ? "space-y-0.5" : "space-y-2"}`}
      >
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-5xl pt-4 pb-16">
      <header className="mb-5">
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
      </header>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <section aria-labelledby="project-context-heading">
          <h2
            id="project-context-heading"
            className="project-section-heading mb-4"
          >
            How It Came Together
          </h2>
          <div className="lg:border-r lg:border-action-secondary lg:pr-12">
            <h3>Role</h3>
            <p className="mb-4">{project.role}</p>
            <h3>Technologies</h3>
            <ProjectList items={project.technologies} compact />
            <h3>Architecture</h3>
            <ProjectList items={project.architecture} />
          </div>
        </section>
        <section aria-labelledby="project-highlights-heading">
          <h2
            id="project-highlights-heading"
            className="project-section-heading mb-4"
          >
            What It Makes Possible
          </h2>
          <h3>Features</h3>
          <ProjectList items={project.features} />
          <h3>See it Live</h3>
          <p>Instructions for seeing it live</p>
        </section>
      </div>
      <section aria-labelledby="project-gallery-heading" className="mt-12">
        <div aria-label={`${project.title} screenshots`}>
          <ProjectGallery project={project} />
        </div>
      </section>
    </main>
  );
}
