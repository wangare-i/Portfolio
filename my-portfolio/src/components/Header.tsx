function Header() {
  return (
    <header className="bg-transparent shadow sticky top-0 z-50">

      <nav className="container mx-auto flex justify-between items-center px-6 py-4">
        <h5 className="text-1xl font-bold text-blue-400">Josephine Irungu</h5>
        <ul className="flex gap-8 text-sm font-medium text-white">
          <li><a href="#about" className="hover:text-pink-400 transition">About</a></li>
          <li><a href="#experience" className="hover:text-pink-400 transition">Experience</a></li>
          <li><a href="#projects" className="hover:text-pink-400 transition">Projects</a></li>
          <li><a href="#certifications" className="hover:text-pink-400 transition">Certifications</a></li>
          <li><a href="#contact" className="hover:text-pink-400 transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
