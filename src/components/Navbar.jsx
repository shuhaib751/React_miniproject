import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 fixed top-0 w-full z-1">
      <ul className="flex space-x-6">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `hover:text-blue-400 ${isActive ? 'text-blue-400 font-semibold' : ''}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/store"
            className={({ isActive }) => 
              `hover:text-blue-400 ${isActive ? 'text-blue-400 font-semibold' : ''}`
            }
          >
            Store
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/learn"
            className={({ isActive }) => 
              `hover:text-blue-400 ${isActive ? 'text-blue-400 font-semibold' : ''}`
            }
          >
            Learn
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about"
            className={({ isActive }) => 
              `hover:text-blue-400 ${isActive ? 'text-blue-400 font-semibold' : ''}`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact"
            className={({ isActive }) => 
              `hover:text-blue-400 ${isActive ? 'text-blue-400 font-semibold' : ''}`
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/login"
            className={({ isActive }) => 
              `hover:text-blue-400 ${isActive ? 'text-blue-400 font-semibold' : ''}`
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/signup"
            className={({ isActive }) => 
              `hover:text-blue-400 ${isActive ? 'text-blue-400 font-semibold' : ''}`
            }
          >
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/cart"
            className={({ isActive }) => 
              `hover:text-blue-400 ${isActive ? 'text-blue-400 font-semibold' : ''}`
            }
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;