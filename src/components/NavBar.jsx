import { NavLink } from 'react-router-dom';
import { FaHome, FaAddressCard, FaGraduationCap, FaEnvelope, FaLaptopCode, FaCertificate, FaBook } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className="bg-gray-900 p-4 text-white shadow-lg">
      <ul className="flex justify-center space-x-8">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => isActive ? "font-bold text-teal-400" : "hover:text-teal-400"}
          >
            <FaHome className="inline mr-2" /> Home
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/summary"
            className={({ isActive }) => isActive ? "font-bold text-teal-400" : "hover:text-teal-400"}
          >
            <FaAddressCard className="inline mr-2" /> Summary
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => isActive ? "font-bold text-teal-400" : "hover:text-teal-400"}
          >
            <FaLaptopCode className="inline mr-2" /> Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            className={({ isActive }) => isActive ? "font-bold text-teal-400" : "hover:text-teal-400"}
          >
            <FaLaptopCode className="inline mr-2" /> Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/education"
            className={({ isActive }) => isActive ? "font-bold text-teal-400" : "hover:text-teal-400"}
          >
            <FaGraduationCap className="inline mr-2" /> Education
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/certifications"
            className={({ isActive }) => isActive ? "font-bold text-teal-400" : "hover:text-teal-400"}
          >
            <FaCertificate className="inline mr-2" /> Certifications
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/other-training"
            className={({ isActive }) => isActive ? "font-bold text-teal-400" : "hover:text-teal-400"}
          >
            <FaBook className="inline mr-2" /> Other Training
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? "font-bold text-teal-400" : "hover:text-teal-400"}
          >
            <FaEnvelope className="inline mr-2" /> Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
