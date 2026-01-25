import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import logo from "@/assets/images/Logo.png";
import resumePdf from "@/assets/AnujithSResume.pdf";

const navItems = [
  { label: 'Home', to: '#home' },
  { label: 'About', to: '#about' },
  { label: 'Projects', to: '#projects' },
  { label: 'Contact', to: '#contact' },
];

const linkBaseClasses =
  'text-sm font-medium tracking-wide transition-colors duration-200 mx-3 cursor-pointer';

const activeClasses = 'text-white border-b border-white';
const inactiveClasses = 'text-indigo-200 hover:text-white hover:bg-backgroundSoft';

const scrollToSection = (e, sectionId) => {
  e.preventDefault();
  const element = document.querySelector(sectionId);
  if (element) {
    const offset = 100; // Account for fixed navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 150; // Offset for navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="shadow-lg border border-stone-300/40  backdrop-blur-xl  rounded-4xl">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 gap-3 md:gap-0">
        <a 
          href="#home" 
          className="flex items-center gap-2"
          onClick={(e) => scrollToSection(e, '#home')}
        >
          <img src={logo} alt="" style={{width:'100px'}} />
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const sectionId = item.to.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={item.to}>
                  <a
                    href={item.to}
                    onClick={(e) => scrollToSection(e, item.to)}
                    className={`${linkBaseClasses} ${isActive ? activeClasses : inactiveClasses}`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href={resumePdf}
            className="flex items-center justify-center gap-1 border border-stone-300/30 rounded-lg p-2 hover:bg-white hover:text-black transition"
            download="AnujithSResume.pdf"
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
            {navItems.map((item) => {
              const sectionId = item.to.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={item.to}>
                  <a
                    href={item.to}
                    onClick={(e) => {
                      scrollToSection(e, item.to);
                      setOpen(false);
                    }}
                    className={`${linkBaseClasses} block ${isActive ? activeClasses : inactiveClasses}`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href={resumePdf}
            className="mt-3 flex items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm font-medium text-background shadow-md shadow-accent/40 transition hover:bg-accentSoft"
            download="AnujithSResume.pdf"
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



