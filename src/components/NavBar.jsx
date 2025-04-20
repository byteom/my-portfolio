import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaAddressCard,
  FaGraduationCap,
  FaEnvelope,
  FaLaptopCode,
  FaCertificate,
  FaBook,
} from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className="bg-gray-900 p-4 text-white shadow-lg font-mono">
      <ul className="flex flex-wrap justify-center gap-6 sm:gap-10">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-teal-400 font-bold border-b-2 border-teal-400 pb-1"
                : "hover:text-teal-400 transition-colors"
            }
          >
            <FaHome className="inline mr-1" /> Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-teal-400 font-bold border-b-2 border-teal-400 pb-1"
                : "hover:text-teal-400 transition-colors"
            }
          >
            <FaLaptopCode className="inline mr-1" /> Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive
                ? "text-teal-400 font-bold border-b-2 border-teal-400 pb-1"
                : "hover:text-teal-400 transition-colors"
            }
          >
            <FaLaptopCode className="inline mr-1" /> Skills
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/education"
            className={({ isActive }) =>
              isActive
                ? "text-teal-400 font-bold border-b-2 border-teal-400 pb-1"
                : "hover:text-teal-400 transition-colors"
            }
          >
            <FaGraduationCap className="inline mr-1" /> Education
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/certifications"
            className={({ isActive }) =>
              isActive
                ? "text-teal-400 font-bold border-b-2 border-teal-400 pb-1"
                : "hover:text-teal-400 transition-colors"
            }
          >
            <FaCertificate className="inline mr-1" /> Certifications
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/other-training"
            className={({ isActive }) =>
              isActive
                ? "text-teal-400 font-bold border-b-2 border-teal-400 pb-1"
                : "hover:text-teal-400 transition-colors"
            }
          >
            <FaBook className="inline mr-1" /> Other Training
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-teal-400 font-bold border-b-2 border-teal-400 pb-1"
                : "hover:text-teal-400 transition-colors"
            }
          >
            <FaEnvelope className="inline mr-1" /> Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
