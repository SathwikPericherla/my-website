import { Link as ScrollLink } from 'react-scroll';

// Define IDs for each section
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
    <nav className="bg-white">
      <div className="container mx-auto  flex  items-center">
        <span className="text-2xl font-bold text-black w-48">LOGO</span>
        <div className="md:hidden">
          {/* Mobile Menu Icon */}
          <button className="text-black focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <ul className="md:flex items-center space-x-16 ml-56 hidden md:block">
          {NavContents.map((item, index) => (
            <li key={index}>
              <ScrollLink
                to={sectionIds[item]}
                spy={true}
                smooth={true}
                duration={500}
                className="text-black hover:text-gray-900 hover:underline duration-700
                cursor-pointer "
              >
                {item}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>


  );
};
