import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Tech Stack", href: "#tech" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-transparent shadow sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center px-6 py-4">
        <h5 className="text-1xl font-bold text-blue-400">Josephine Irungu</h5>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-white">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-pink-400 transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden text-white text-2xl" onClick={toggleMenu}>
          {isOpen ? <HiX /> : <HiMenu />}
        </div>
      </nav>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-80 px-6 pb-4">
          <ul className="space-y-4 text-sm font-medium text-white">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block hover:text-pink-400 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
