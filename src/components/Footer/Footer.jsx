// src/components/Footer.js

import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between items-center py-14 px-4 md:px-24 bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between w-full">
        {/* Contact Information Section */}
        <div className="footer-contact flex flex-col items-start mb-8 md:mb-0">
          <Link to="/" className="text-3xl font-bold tracking-wider mb-4">
            <span className="text-cyan-500">Alex's</span> Book Finder
          </Link>

          <p className="flex items-center mb-2 text-gray-200 cursor-pointer">
            <FaEnvelope className="mr-2" /> md.amil2020@gmail.com
          </p>

          <div className="footer-social flex space-x-4">
            <a
              href="#"
              className="hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Company Links Section */}
        <section className="footer-company-info mb-4 md:mb-0">
          <h3 className="font-semibold text-2xl">Company</h3>
          <div className="w-full h-1 bg-yellow-400 my-3 rounded-full"></div>
          <ul className="flex flex-col gap-2">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `cursor-pointer transition-all ${
                    isActive ? "text-cyan-500 font-semibold" : "text-gray-200 hover:text-cyan-400"
                  }`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `cursor-pointer transition-all ${
                    isActive ? "text-cyan-500 font-semibold" : "text-gray-200 hover:text-cyan-400"
                  }`
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  `cursor-pointer transition-all ${
                    isActive ? "text-cyan-500 font-semibold" : "text-gray-200 hover:text-cyan-400"
                  }`
                }
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/privacy"
                className={({ isActive }) =>
                  `cursor-pointer transition-all ${
                    isActive ? "text-cyan-500 font-semibold" : "text-gray-200 hover:text-cyan-400"
                  }`
                }
              >
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </section>

        {/* Services Section */}
        <section className="footer-products">
          <h3 className="font-semibold text-2xl">Services</h3>
          <div className="w-full h-1 bg-yellow-400 my-3 rounded-full"></div>
          <ul className="flex flex-col gap-2">
            <li>
              <NavLink
                to="/services/service-one"
                className={({ isActive }) =>
                  `cursor-pointer transition-all ${
                    isActive ? "text-cyan-500 font-semibold" : "text-gray-200 hover:text-cyan-400"
                  }`
                }
              >
                Service One
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `cursor-pointer transition-all ${
                    isActive ? "text-cyan-500 font-semibold" : "text-gray-200 hover:text-cyan-400"
                  }`
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/help"
                className={({ isActive }) =>
                  `cursor-pointer transition-all ${
                    isActive ? "text-cyan-500 font-semibold" : "text-gray-200 hover:text-cyan-400"
                  }`
                }
              >
                Help Center
              </NavLink>
            </li>
          </ul>
        </section>
      </div>

      {/* Copyrights */}
      <div className="text-center mt-8 md:-mb-8">
        <h3 className="text-gray-200">
          © {new Date().getFullYear()} All Rights Reserved.
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
