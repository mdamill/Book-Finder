import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
];

const Navbar = () => {
  return (
    <nav className="flex flex-wrap justify-between items-center py-4 px-4 md:px-20 bg-gray-800 text-white shadow-lg sticky top-0 z-50">
      
      {/* Logo */}
      <Link to="/" className="text-2xl md:text-3xl font-bold tracking-wide">
        <span className="text-cyan-500">Book</span>Finder
      </Link>

      {/* Navigation Links */}
      <div className="flex flex-wrap items-center space-x-4 md:space-x-8">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `font-semibold text-base md:text-lg transition-colors duration-300 ${
                isActive ? "text-cyan-400" : "hover:text-cyan-400"
              }`
            }
          >
            {link.title}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
