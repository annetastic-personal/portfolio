import "./DesignGuide.css";

// Import centralized color palette for consistent theming
import palette from "../theme/palette";

export default function DesignGuide() {
  return (
    <div className="p-8 design-guide">
      {/* Page title */}
      <h1 className="text-[32px] leading-[110%]">Design Guide</h1>

      {/* Color palette section: shows all theme colors as swatches */}
      <section className="mb-8" id="color-palette-section">
        <h2 className="text-[24px] leading-[130%]">Color Palette</h2>
        <div className="palette-table">
          {palette.map((c) => (
            <div
              key={c.name}
              className="palette-table-row border-b border-brand-text"
            >
              {/* Column 1: Name, Hex, Var */}
              <div className="palette-table-col palette-table-info">
                <div className="font-semibold">{c.name}</div>
                <div className="text-xs text-gray-500">{c.hex}</div>
                <div className="text-xs text-gray-500">{c.className}</div>
              </div>
              {/* Column 2: Swatch */}
              <div className="palette-table-col palette-table-swatch">
                <div
                  className={`palette-swatch ${c.className}`}
                  title={c.hex}
                />
              </div>
              {/* Column 3: Sample element */}
              <div className="palette-table-col palette-table-sample">
                {c.name === "Deep Purple" && (
                  <>
                    <h1 className="text-brand-primary">Heading 1</h1>
                    <div className="rounded bg-brand-primary p-2 text-white">
                      Header/Footer Background
                    </div>
                  </>
                )}
                {c.name === "Indigo" && (
                  <>
                    <h2 className="text-brand-secondary">Heading 2</h2>
                    <span className="my-2 inline-block text-xl font-bold text-brand-secondary">
                      Section Title
                    </span>
                    <button className="rounded bg-brand-secondary px-4 py-2 text-[15px] font-bold text-white hover:bg-brand-tertiary focus:bg-brand-tertiary">
                      Secondary Button
                    </button>
                  </>
                )}
                {c.name === "Teal" && (
                  <>
                    <h3 className="text-brand-tertiary">Heading 3</h3>
                    <a
                      className="text-brand-tertiary underline hover:text-brand-secondary focus:text-brand-secondary"
                      href="#"
                    >
                      Link
                    </a>
                  </>
                )}
                {c.name === "Lime" && (
                  <>
                    <h4 className="text-brand-accent">Heading 4</h4>
                    <button className="mt-2 rounded bg-brand-accent px-4 py-2 text-[15px] font-bold text-white hover:bg-brand-secondary focus:bg-brand-secondary">
                      Primary Button
                    </button>
                  </>
                )}
                {c.name === "Magenta" && (
                  <>
                    <h5 className="m-0 font-bold text-brand-highlight">
                      Heading 5
                    </h5>
                    <span className="inline-block rounded bg-brand-highlight px-3 py-1 text-sm text-white">
                      Badge
                    </span>
                  </>
                )}
                {c.name === "Slate" && (
                  <>
                    <span className="text-base text-brand-text">
                      Default Text
                    </span>
                    <button className="mt-2 rounded bg-brand-text px-4 py-2 text-[15px] font-bold text-white hover:bg-brand-primary focus:bg-brand-primary">
                      Close
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hero Section Sample */}
      <section className="hero-section mt-12">
        <div className="designguide-hero-demo bg-brand-primary text-white">
          <h1 className="text-white">Welcome to My Portfolio</h1>
          <p>
            Showcasing my work and skills with an accessible, vibrant palette.
            <br />
            <a
              className="text-brand-tertiary underline hover:text-brand-secondary focus:text-brand-secondary"
              href="https://github.com/odomaf/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              View source on GitHub
            </a>
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: 700,
              margin: "0 auto 1.5rem auto",
            }}
          >
            <button className="rounded bg-brand-accent px-4 py-2 text-[15px] font-bold text-white hover:bg-brand-secondary focus:bg-brand-secondary">
              Primary Button
            </button>
            <button className="rounded bg-brand-secondary px-4 py-2 text-[15px] font-bold text-white hover:bg-brand-tertiary focus:bg-brand-tertiary">
              Secondary Button
            </button>
            <button className="rounded bg-brand-text px-4 py-2 text-[15px] font-bold text-white hover:bg-brand-primary focus:bg-brand-primary">
              Close
            </button>
            <div className="inline-block rounded bg-brand-highlight px-3 py-1 text-sm text-white">
              <strong>Badge</strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
