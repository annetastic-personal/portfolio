import { Link } from "react-router-dom";

export default function SiteHeader() {
  return (
    <header className="mx-auto w-full max-w-5xl pb-8">
      <section>
        <h1 className="mb-4">Anne Odom</h1>
        <h2 className="text-action-secondary">
          Full-Stack Web and Application Developer
        </h2>
        <div className="mt-4 grid grid-cols-2 items-start gap-4 border-t border-border-emphasis pt-2">
          <h3 className="text-surface-emphasis">
            Live curious. Create with compassion. Bring joy.
          </h3>
          <nav className="flex justify-end gap-4 text-right">
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
          </nav>
        </div>
      </section>
    </header>
  );
}