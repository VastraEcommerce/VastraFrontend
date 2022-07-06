import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="bg-primary text-center mx-auto">Hello for all pages</div>;
      <div className="container">
        <Navbar />
        <Routes>
          <Navbar />
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="products">
              <Route index element={<div>Products</div>} />
              <Route path=":productId" element={<div>Product details</div>} />
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
