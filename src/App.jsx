import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/">
            <Route index element={<div>Home Page</div>} />
            <Route path="products">
              <Route index element={<div>Products</div>} />
              <Route path=":productId" element={<ProductDetails />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
