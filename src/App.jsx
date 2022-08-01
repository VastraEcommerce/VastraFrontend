import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import Register from "./pages/Account/register/Register";
import Login from "./pages/Account/login/Login";

function App() {
  return (
    <>
      <Navbar>
        <div className="container">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="products">
                <Route index element={<div>Products</div>} />
                <Route path=":productId" element={<ProductDetails />} />
              </Route>
              <Route path="/signup" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </Navbar>
    </>
  );
}

export default App;
