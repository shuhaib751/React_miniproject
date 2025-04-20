import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Learn from "./Pages/Learn"; // Add this import

const App = () => {
  return(
    <> 
      <div className="bg-slate-900 fixed w-full z-10">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/learn" element={<Learn />} /> {/* Add this new route */}
      </Routes>
    </>
  );
};

export default App;
// last thing
