import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaBars,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useApp } from "../../context/AppContext";

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(() => {
    const path = location.pathname.substring(1) || "home";
    return path;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { darkMode, toggleDarkMode } = useApp();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { id: "home", icon: FaHome, text: "Inicio", path: "/" },
    { id: "skills", icon: FaCode, text: "Skills", path: "/skills" },
    { id: "experience", icon: FaBriefcase, text: "Experiencia", path: "/experience" },
    { id: "education", icon: FaGraduationCap, text: "Educación", path: "/education" },
    {/* id: "projects", icon: FaLaptopCode, text: "Proyectos", path: "/projects" */},
    { id: "contact", icon: FaEnvelope, text: "Contacto", path: "/contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
      darkMode 
        ? "bg-[#1a1a1a]/90 backdrop-blur-md" 
        : "bg-[#f5f5dc]/90 backdrop-blur-md"
    }`}>
      <div className="md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto">
        <div className={`p-[2px] md:rounded-full transition-all duration-300 ${
          darkMode 
            ? "bg-gradient-to-r from-[#2d3748] via-[#4a5568] to-[#2d3748]" 
            : "bg-gradient-to-r from-[#add8e6] via-[#d0e8f2] to-[#add8e6]"
        } animate-gradient-x`}>
          <nav className={`backdrop-blur-md md:rounded-full px-4 md:px-6 py-2.5 transition-colors duration-300 ${
            darkMode ? "bg-[#1a1a1a]/90" : "bg-[#f5f5dc]/90"
          }`}>
            {/* Mobile Menu Button */}
            <div className="flex justify-between items-center md:hidden px-2">
              <Link 
                to="/" 
                className={`font-bold transition-colors duration-300 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Portfolio
              </Link>
              
              <div className="flex items-center gap-2">
                {/* Toggle modo oscuro móvil */}
                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                    darkMode 
                      ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300" 
                      : "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                  }`}
                  aria-label={darkMode ? "Cambiar modo claro" : "Cambiar modo oscuro"}
                >
                  {darkMode ? <FaSun /> : <FaMoon />}
                </button>

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`p-2 transition-colors duration-300 ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  <FaBars />
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-1 lg:gap-2 py-4 md:py-0">
                {navLinks.map(({ id, icon: Icon, text, path }) => (
                  <Link
                    key={id}
                    to={path}
                    onClick={() => {
                      setActiveLink(id);
                      setIsMenuOpen(false);
                    }}
                    className={`px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium
                      transition-all duration-300 flex items-center gap-2
                      ${darkMode 
                        ? "hover:bg-[#4a5568]/20 text-gray-300" 
                        : "hover:bg-[#add8e6]/20 text-gray-700"
                      }
                      ${activeLink === id
                        ? darkMode
                          ? "bg-[#4a5568]/30 text-[#63b3ed]"
                          : "bg-[#add8e6]/30 text-[#007acc]"
                        : ""
                      }
                    `}
                  >
                    <Icon
                      className={`text-base ${activeLink === id ? "scale-110" : ""}`}
                    />
                    <span className="inline">{text}</span>
                  </Link>
                ))}

                {/* Controles para desktop */}
                <div className="flex items-center gap-2 md:ml-4 lg:ml-6 mt-2 md:mt-0">
                  {/* Toggle modo oscuro desktop */}
                  <button
                    onClick={toggleDarkMode}
                    className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                      darkMode 
                        ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300" 
                        : "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                    }`}
                    aria-label={darkMode ? "Cambiar modo claro" : "Cambiar modo oscuro"}
                  >
                    {darkMode ? <FaSun /> : <FaMoon />}
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 6s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </header>
  );
}
