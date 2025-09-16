import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

// Navigation links for reusability
const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleNavbar = () => setToggleMenu((prev) => !prev);

  return (
    <nav className="flex justify-between items-center py-4 px-4 md:px-20 bg-gray-800 text-white shadow-lg sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="text-3xl font-bold tracking-wide">
        <span className="text-cyan-500">Alex's</span> Book Finder
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `font-semibold text-lg transition-colors duration-300 ${
                isActive ? "text-cyan-400" : "hover:text-cyan-400"
              }`
            }
          >
            {link.title}
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={handleNavbar}
          aria-label="Toggle Menu"
          className="text-white"
        >
          <HiOutlineMenuAlt3 size={30} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          toggleMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={handleNavbar}
      ></div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 shadow-lg z-50 p-6 transform transition-transform duration-300 ease-in-out md:hidden ${
          toggleMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={handleNavbar}
            aria-label="Close Menu"
            className="text-white hover:text-cyan-400"
          >
            <FaTimes size={30} />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col space-y-6">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `font-semibold text-xl transition-colors duration-300 ${
                  isActive ? "text-cyan-400" : "text-white hover:text-cyan-400"
                }`
              }
              onClick={handleNavbar} // Close on click
            >
              {link.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
