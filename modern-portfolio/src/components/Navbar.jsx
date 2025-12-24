import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import logo from "@/assets/images/Logo.png";

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

const linkBaseClasses =
  'text-sm font-medium tracking-wide transition-colors duration-200 mx-3';

const activeClasses = 'text-white border-b border-white';
const inactiveClasses = 'text-indigo-200 hover:text-white hover:bg-backgroundSoft';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-3 z-50 border border-stone-300/40 bg-background/20 backdrop-blur rounded-4xl">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 gap-3 md:gap-0">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="" style={{width:'100px'}} />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `${linkBaseClasses} ${isActive ? activeClasses : inactiveClasses}`
                  }
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href="/assets/resume.pdf"
            className="flex items-center justify-center gap-1 border border-stone-300/30 rounded-lg p-2 hover:bg-white hover:text-black transition"
            download
          >
            <FiDownload className="h-4 w-4" />
            <span>Resume</span>
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-accentMuted/60 p-2 text-textMuted shadow-sm transition hover:border-accent hover:text-accent md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-accentMuted/40 bg-backgroundSoft/95 px-4 py-3 md:hidden">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `${linkBaseClasses} block ${
                      isActive ? activeClasses : inactiveClasses
                    }`
                  }
                  onClick={() => setOpen(false)}
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href="/assets/resume.pdf"
            className="mt-3 flex items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm font-medium text-background shadow-md shadow-accent/40 transition hover:bg-accentSoft"
            download
          >
            <FiDownload className="h-4 w-4" />
            <span>Resume</span>
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;



