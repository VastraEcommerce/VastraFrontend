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
import Login from "./pages/Login";
function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='profile'>
              <Route index element={<Profile />} />
              <Route path='address' element={<Address />} />
            </Route>
            <Route path='products'>
              <Route
                index
                element={
                  <Button className=' btn btn-primary' variant='contained'>
                    Contained
                  </Button>
                }
              />
              <Route path=':productId' element={<ProductDetails />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </Navbar>
    </>
  );
}

export default App;
