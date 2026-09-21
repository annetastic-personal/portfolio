import { Link, useLocation } from "react-router-dom";

export default function SiteHeader() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="mx-auto w-full max-w-[72rem] pb-8">
      <section>
        {isHomePage ? (
          <h1 className="site-identity mb-4">Anne Odom</h1>
        ) : (
          <p className="site-identity mb-4">Anne Odom</p>
        )}
        <h2 className="text-action-secondary">
          Full-Stack Web and Application Developer
        </h2>
        <div className="mt-4 grid grid-cols-2 items-start gap-4 border-t border-border-emphasis pt-2">
          <p className="font-heading text-project-title font-bold text-surface-emphasis">
            Live curious. Create with compassion. Bring joy.
          </p>
          <nav className="flex justify-end gap-4 text-right">
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
          </nav>
        </div>
      </section>
    </header>
  );
}
