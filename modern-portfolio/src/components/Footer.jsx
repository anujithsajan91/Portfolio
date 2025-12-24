import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-accentMuted/40 bg-backgroundSoft/80">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-textMuted sm:flex-row sm:px-6">
        <p className="order-2 sm:order-1">
          © {year} Anujith.dev. Built with React & Tailwind.
        </p>
        <div className="order-1 flex items-center gap-4 sm:order-2">
          <a
            href="https://github.com/anujithsajan91"
            target="_blank"
            rel="noreferrer"
            className="text-textMuted transition hover:text-accent"
            aria-label="GitHub profile"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin" // TODO: Replace with your LinkedIn
            target="_blank"
            rel="noreferrer"
            className="text-textMuted transition hover:text-accent"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
