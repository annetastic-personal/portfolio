import React from "react";
import projects from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen py-16 text-text-primary">
      <section className="mx-auto max-w-[48ch]">
        <h1 className="mb-4 font-heading text-page-title font-bold text-text-primary">
          Anne Odom
        </h1>
        <p className="text-lg font-medium text-text-secondary">
          Full-Stack Web and Application Developer
        </p>
        <p className="mt-2 text-surface-emphasis">
          Live curious. Create with compassion. Bring joy.
        </p>
      </section>

      <section className="mx-auto mt-6 max-w-prose text-text-primary">
        I create human-centered technology that frees people to focus on the
        things only people can do. As a full-stack web and application
        developer, I build practical tools for research, operations,
        entertainment, <a href="">sample link</a> and decision-making. I enjoy learning from people with
        different perspectives and combining that curiosity with my experience
        in data systems and user-facing applications to make complex problems
        more approachable and information more useful.
      </section>

      <section className="mx-auto mt-6 max-w-5xl">
        <div className="flex w-full flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
