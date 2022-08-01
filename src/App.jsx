import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Button from "@mui/material/Button";
import Address from "./pages/Address";
import Login from "./pages/Account/login/Login";
import Register from "./pages/Account/register/Register";
function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="profile">
              <Route index element={<Profile />} />
              <Route path="address" element={<Address />} />
            </Route>

            <Route path="products">
              <Route
                index
                element={
                  <div>
                    <Button className=" btn btn-primary" variant="contained">
                      Contained
                    </Button>
                  </div>
                }
              />
              <Route path=":productId" element={<ProductDetails />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </Navbar>
    </>
  );
}

export default App;
