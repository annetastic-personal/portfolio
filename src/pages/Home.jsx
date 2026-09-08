import projects from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";

export default function Home() {
  const ttgcollector = projects.find((p) => p.slug === "ttgcollector");
  const pestDegreeDay = projects.find(
    (p) => p.slug === "pest-degree-day-calculator",
  );

  return (
    <main className="min-h-screen py-16">
      <section className="mx-auto max-w-[48ch]">
        <h1 className="mb-4">Anne Odom</h1>
        <p className="text-lg font-medium text-text-secondary">
          Full-Stack Web and Application Developer
        </p>
        <p className="mt-2 text-surface-emphasis">
          Live curious. Create with compassion. Bring joy.
        </p>
      </section>

      <section className="home-section grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex h-full items-center justify-end text-4xl leading-[3.5rem] text-right text-text-primary">
          Creating <span className="home-key-word">human</span>-centered
          technology that frees <span className="home-key-word">people</span>{" "}
          to focus on the things only{" "}
          <span className="home-key-word">people</span> can do.
        </div>
        <ProjectCard project={ttgcollector} className="justify-self-start" />
      </section>

      <section className="home-section grid grid-cols-1 gap-6 md:grid-cols-2">
        <ProjectCard project={pestDegreeDay} className="justify-self-end" />
        <div className="flex h-full items-center justify-start text-left text-5xl leading-[3.5rem] text-text-primary">
          Building practical tools for research, operations, entertainment, and
          decision-making.
        </div>
      </section>

      <section className="home-section">
        <div className="flex h-full items-center justify-center text-center">
          I enjoy learning from people with different perspectives and combining that curiosity with my experience in data systems and user-facing
          applications to make complex problems more approachable and information more useful.
        </div>
        <h2 className="mb-4">Skills</h2>
        <div></div>
      </section>
    </main>
  );
}
