import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/" className="flex items-center ml-5 space-x-4">
          <div> 
            <img src="logo.png" className="h-14" alt="Inner Peace Logo" />
          </div>
          <h1 className="text-white text-4xl font-bold tracking-wide">
            INNER PEACE
          </h1>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/" className="hover:text-green-400 transition-colors">
            Home
          </NavLink>

          {/* Added Learn Link */}
          <NavLink to="/learn" className="hover:text-blue-400 transition-colors">
            Learn
          </NavLink>

          <NavLink to="/cart" className="relative">
            <FaShoppingCart className="text-2xl hover:text-green-400 transition-colors"/>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                {cart.length}
              </span>
            )}
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;