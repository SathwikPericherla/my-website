import { Link as ScrollLink } from 'react-scroll';
import {DarkModeToggle} from "./DarkMode"

const sectionIds = {
  Home: 'home-section',
  About: 'about-section',
  Experience: 'experience-section',
  Projects: 'projects-section',
  Certificates: 'certificates-section',
  Blog: 'blog-section',
};

export const NavBar = () => {
  const NavContents = ["Home", "About", "Experience", "Projects", "Certificates", "Blog"];

  return (
    <nav className="bg-white text-black text-lg py-6 fixed top-0 w-full z-50 dark:bg-black dark:text-white">
      <div className="container flex ">
        <span className="text-2xl font-bold w-96 ml-48">Sathwik Pericherla</span>
        <div className="md:hidden">
          <button className="text-black focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <ul className="md:flex items-center space-x-16 hidden md:block">

          {NavContents.map((item, index) => (
            <li key={index}>
              <ScrollLink
                to={sectionIds[item]}
                spy={true}
                smooth={true}
                duration={500}
                className=" hover:text-slate-900 hover:underline duration-700
                cursor-pointer font-semibold dark:hover:text-slate-200 "
              >
                {item}
              </ScrollLink>
            </li>
          ))}
          <span className='absolute right-11'><DarkModeToggle /> </span>
        </ul>
  
      </div>
    </nav>


  );
};
