export default function About() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl pt-4 pb-16">
      <h1 className="mb-8">About Me</h1>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <section>
            <div className="max-w-3xl space-y-4">
              <p>
                I tend to be most useful when the problem is interesting, the
                information is messy, and nobody has quite figured out the right
                question yet.
              </p>
              <p>
                My work has taken me from university research and public-sector
                applications to education, client software, and video game
                development. I have built data tools, forecasted pest activity
                for Illinois agriculture, improved support processes, and helped
                large teams navigate the pressure of making and shipping games.
                The industries have changed, but the underlying challenge has
                often been the same: understand what people are trying to do,
                then make the surrounding systems easier to work with.
              </p>
              <p>
                I like the space between “this process is frustrating” and “here
                is a tool that helps.” That space is full of conversation,
                investigation, false starts, small discoveries, and decisions
                about what not to build. It is also where technical work becomes
                human work. The result I care about is not software that looks
                impressive from a distance. It is software that makes sense to
                the people who rely on it.
              </p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="mb-4">What I'm Looking For</h2>
            <div className="max-w-3xl">
              <p>
                I want to continue building practical, human-centered
                applications surrounded by other folks who alsoy enjoy it and have
                fun doing it together. I am especially interested in work that
                combines full-stack development, data, and problem-solving in
                service of research, operations, education, or other meaningful
                areas of human work.
              </p>
            </div>
          </section>
        </div>

        <section>
          <h2 className="mb-4">Career Highlights</h2>
          <div className="max-w-3xl">
            <h3 className="mt-8 mb-2">Software Developer</h3>
            <h4 className="mb-2">
              Prairie Research Institute, University of Illinois
            </h4>
            <p className="mb-4">
              Created online applications and data models to enhance PRI’s
              efforts to research solutions for a society undergoing climate and
              energy transitions
            </p>
            <h3 className="mt-8 mb-2">Process Consultant</h3>
            <h4 className="mb-2">
              Applied Technologies for Learning in the Arts &amp; Sciences
              University of Illinois
            </h4>
            <p className="mb-4">
              Audited customer support habits at the ATLAS help desk to identify
              tools and process improvements for reducing team member overwhelm
              and minimize lost support requests.
            </p>
            <h3 className="mt-8 mb-2">Senior Project Manager</h3>
            <h4 className="mb-2">Volition Game Development Studio</h4>
            <p className="mb-4">
              Supported teams of up to 120 people suffering constant stress and
              pressure through video game design, development, beta releases,
              and delivery to market, by coaching, advising, listening, and
              building community
            </p>
            <h3 className="mt-8 mb-2">Software Engineer</h3>
            <h4 className="mb-2">Pixo Tech</h4>
            <p className="mb-4">
              Developed and maintained full stack applications for clients,
              including University of Illinois at Urbana-Champaign, McGraw-Hill
              Publishing, Illinois Department of Child and Family Services,
              United States Geological Survey, Champaign Urbana Community
              Wireless Network, Illinois Math and Science Academy and more.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
