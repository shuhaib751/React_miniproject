import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Learn from "./Pages/Learn";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";      // New import
import SignUp from "./Pages/SignUp";    // New import
import Store from "./Pages/Store";      // New import

const App = () => {
  return (
    <>
      {/* Navbar Section */}
      <div className="bg-slate-900 fixed w-full z-10">
        <Navbar />
      </div>

      {/* Content Section */}
      <div className="mt-[64px]"> {/* Adjust this value to match the navbar's height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
//changed byyyyy