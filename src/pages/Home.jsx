import projects from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";

export default function Home() {
  const ttgcollector = projects.find((p) => p.slug === "ttgcollector");
  const pestDegreeDay = projects.find(
    (p) => p.slug === "pest-degree-day-calculator",
  );

  return (
    <main className="min-h-screen py-16">
      <section className="home-section home-project-row mt-0 pt-0">
        <div className="home-statement justify-end text-right">
          <p className="font-bold">
            <span className="block">Creating</span>
            <span className="block">
              <span className="home-keyword">human</span>
              -centered
            </span>
            <span className="block">technology</span>
            <span className="block">
              that frees <span className="home-keyword">people</span>
            </span>
            <span className="block">to focus on the things</span>
            <span className="block">
              only <span className="home-keyword">people</span> can do
            </span>
          </p>
        </div>
        <ProjectCard project={ttgcollector} className="justify-self-start" />
      </section>

      <section className="home-section home-project-row">
        <ProjectCard project={pestDegreeDay} className="justify-self-end" />
        <div className="home-statement justify-start text-left">
          <p className="font-bold">
            <span className="block">
              Building <span className="home-keyword">practical</span>{" "}
              <span className="home-keyword">tools</span>
            </span>
            <span className="block">for research,</span>
            <span className="block">operations,</span>
            <span className="block">entertainment,</span>
            <span className="block">and decision-making</span>
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="mx-auto flex h-full max-w-prose items-center justify-center text-2xl text-center">
          I enjoy learning from people with different perspectives and combining
          that curiosity with my experience in data systems and user-facing
          applications to make complex problems more approachable and
          information more useful.
        </div>
        <h2 className="mb-4">Skills</h2>
        <div></div>
      </section>
    </main>
  );
}
