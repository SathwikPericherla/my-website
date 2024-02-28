import { Link as ScrollLink } from 'react-scroll';
import {DarkModeToggle} from "./DarkMode"
import { useState,useEffect } from 'react'

const sectionIds = {
  Home: 'home-section',
  About: 'about-section',
  Experience: 'experience-section',
  Projects: 'projects-section',
  Certificates: 'certificates-section',
  Blog: 'blog-section',
};

const MobileMenu = ({ NavContents, sectionIds, onItemClick }) => (
  <div className="md:hidden">
    <div className="relative">
      <button onClick={onItemClick} className="text-black focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <ul className="absolute top-full left-0 z-10 bg-white shadow-md py-2 mt-2 rounded-md">
        {NavContents.map((item, index) => (
          <li key={index}>
            <ScrollLink
              to={sectionIds[item]}
              spy={true}
              smooth={true}
              duration={500}
              className="block px-4 py-2 text-sm text-black hover:bg-gray-200 dark:text-white dark:hover:bg-gray-800"
              onClick={onItemClick} // Close the menu when a link is clicked
            >
              {item}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const NavBar = () => {
  const NavContents = ["Home", "About", "Experience", "Projects", "Certificates", "Blog"];
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-black text-lg py-6 fixed top-0 w-full z-50 dark:bg-black dark:text-white">
      <div className="container flex">
        <span className="text-2xl font-bold w-96 ml-10 lg:ml-48">Sathwik Pericherla</span>
        {/* Regular Navbar for large screens */}
        <ul className="hidden md:flex items-center space-x-16">
          {NavContents.map((item, index) => (
            <li key={index}>
              <ScrollLink
                to={sectionIds[item]}
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-slate-900 hover:underline duration-700 cursor-pointer font-semibold dark:hover:text-slate-200"
              >
                {item}
              </ScrollLink>
            </li>
          ))}
          <span className='absolute right-11'><DarkModeToggle /> </span>
        </ul>
        {/* Mobile dropdown menu for small screens */}
        <div className="md:hidden relative">
          <button onClick={toggleMenu} className="text-black focus:outline-none dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10 dark:bg-black dark:text-white ">
              <ul className="py-1">
                {NavContents.map((item, index) => (
                  <li key={index}>
                    <ScrollLink
                      to={sectionIds[item]}
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-200 dark:text-white"
                      onClick={toggleMenu} // Close the menu when a link is clicked
                    >
                      {item}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
              <div className='ml-3 mb-2 lg:mr-3 lg:mt-2'>
              <DarkModeToggle/>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
