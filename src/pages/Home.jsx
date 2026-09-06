import React from "react";
import projects from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";

export default function Home() {
  return (
    <main className="bg-brand-background text-brand-text min-h-screen px-6 py-10">
      <section className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold text-brand-primary">
          Anne Odom
        </h1>
        <p className="text-lg font-medium text-brand-secondary">
          Full-Stack Web and Application Developer
        </p>
        <p className="mt-2 text-brand-tertiary">
          Live curious. Create with compassion. Bring joy.
        </p>
      </section>

      <section className="mx-auto mt-8 max-w-3xl text-brand-text">
        I create human-centered technology that frees people to focus on the
        things only people can do. As a full-stack web and application
        developer, I build practical tools for research, operations,
        entertainment, and decision-making. I enjoy learning from people with
        different perspectives and combining that curiosity with my experience
        in data systems and user-facing applications to make complex problems
        more approachable and information more useful.
      </section>

      <section className="mx-auto mt-8 max-w-5xl">
        <div className="carousel w-full">
          {projects.map((project, index) => {
            const previousProject =
              projects[(index - 1 + projects.length) % projects.length];
            const nextProject = projects[(index + 1) % projects.length];

            return (
              <div
                key={project.slug}
                id={`slide-${project.slug}`}
                className="carousel-item relative w-full"
              >
                <ProjectCard project={project} />
                <div className="absolute top-1/2 flex w-full -translate-y-1/2 justify-between px-2">
                  <a
                    href={`#slide-${previousProject.slug}`}
                    className="btn btn-circle"
                  >
                    ❮
                  </a>
                  <a
                    href={`#slide-${nextProject.slug}`}
                    className="btn btn-circle"
                  >
                    ❯
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={`#slide-${project.slug}`}
              className="btn btn-xs"
            >
              {project.title}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
