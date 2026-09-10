export default function SiteFooter() {
  return (
    <footer className="bg-surface-footer text-white">
      <div className="mx-auto flex max-w-[72rem] flex-col gap-4 px-4 py-8 md:flex-row md:items-start md:justify-between md:px-6 lg:px-8">
        <p className="text-base">Built with curiosity, compassion, and joy.</p>
        <div className="flex w-full flex-col items-end md:w-auto">
          <nav
            aria-label="Professional links"
            className="flex flex-wrap justify-end gap-x-4 gap-y-2"
          >
            <a
              href="https://github.com/annetasticthoughts"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/anneodom/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <a
              href="/RESUME-FullStackFocus.pdf"
              download="Anne-Odom-Resume.pdf"
              className="footer-link"
            >
              Download Resume (PDF)
            </a>
          </nav>
          <p className="mt-2 text-right text-link-size font-bold">
            Email: afodom207@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
}
