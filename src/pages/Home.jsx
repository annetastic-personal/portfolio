import React from "react";

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
    </main>
  );
}
