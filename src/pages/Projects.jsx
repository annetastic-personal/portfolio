import projects from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";

export default function Projects() {
  return (
    <main id="main-content" tabIndex={-1} className="mx-auto min-h-screen max-w-5xl pt-4 pb-16">
      <h1 className="mb-8">Projects</h1>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}