import projects from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";

export default function Home() {
  const ttgcollector = projects.find((p) => p.slug === "ttgcollector");
  const pestDegreeDay = projects.find(
    (p) => p.slug === "pest-degree-day-calculator",
  );

  return (
    <main className="min-h-screen pt-8 pb-16">
      <section className="home-section home-project-row mt-0 pt-0">
        <div className="home-statement max-w-prose justify-end text-right md:items-center">
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
        <div className="home-statement max-w-prose justify-start text-left md:items-center">
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
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-2xl leading-tight">
            <span className="mb-3 block font-bold lg:whitespace-nowrap">
              I work where people, information, and systems meet.
            </span>
            <span className="block text-lg leading-snug">
              Bringing <span className="home-keyword">curiosity</span> to messy
              requirements, <span className="home-keyword">care</span> to the
              people affected by them,
              <br />
              and a broad technical perspective to building software that feels
              clear, useful, and <span className="home-keyword">human</span>.
            </span>
          </p>
        </div>
        <div className="mt-10 border-t border-surface-footer pt-2">
          <h2>Skills</h2>
          <div className="mt-4 space-y-6">
            <div className="space-y-0.5">
              <h3 className="skill-category">Languages &amp; Markup</h3>
              <p>C#, VB.NET, Python, JavaScript, SQL, HTML, CSS</p>
            </div>
            <div className="space-y-0.5">
              <h3 className="skill-category">
                Frameworks, Libraries, &amp; Runtimes
              </h3>
              <p>
                React, Node.js, Express, .NET, ASP.NET, Bootstrap, Tailwind CSS,
                jQuery, ClosedXML
              </p>
            </div>
            <div className="space-y-0.5">
              <h3 className="skill-category">Databases</h3>
              <p>PostgreSQL, Microsoft SQL Server, MongoDB, MySQL, MariaDB</p>
            </div>
            <div className="space-y-0.5">
              <h3 className="skill-category">Tools &amp; Platforms</h3>
              <p>
                Visual Studio, VS Code, Git, GitHub, GitHub Actions, GitHub
                self-hosted runners, Jira, Excel, SharePoint, Confluence
              </p>
            </div>
            <div className="space-y-0.5">
              <h3 className="skill-category">Additional Technologies</h3>
              <p>Java, VBA, Perl, R</p>
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </main>
  );
}
