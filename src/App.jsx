import { Route, Routes } from 'react-router-dom';
import AdminMain from './admin/AdminMain';
import AdminLogin from './admin/pages/AdminLogin';
import Customers from './admin/pages/Customers';
import Orders from './admin/pages/Orders';
import Products from './admin/pages/Products';
import Layout from './components/Layout';
import RequireAuth, { roles } from './features/auth/RequireAuth';
import About from './pages/About';
import Login from './pages/Account/login/Login';
import Register from './pages/Account/register/Register';
import Address from './pages/Address';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProductDetails from './pages/ProductDetails';
import Profile from './pages/Profile';
import ShoppingBag from './pages/ShopingBag';

function App() {
  return (
    <Routes>
      <Route element={<RequireAuth allowedRoles={[roles.ADMIN]} />}>
        <Route path="/admin">
          <Route path="login" element={<AdminLogin />} />
          <Route element={<AdminMain />}>
            {/* <Route element={<Dashboard />} /> */}
            {/* <Route index path="products" element={<Products />} /> */}
            <Route index element={<Products />} />
            <Route path="customers" element={<Customers />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Route>
      </Route>
      <Route path="/" element={<Layout />}>
        {/* Puplic Routes */}

        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="products">
          <Route index element={<div>Products</div>} />
          <Route path=":productId" element={<ProductDetails />} />
        </Route>
        <Route path="unauthorized" element={<div>unauthorized</div>} />

        {/* Protected Routes */}
        <Route element={<RequireAuth allowedRoles={[roles.USER]} />}>
          <Route path="profile">
            <Route index element={<Profile />} />
            <Route path="address" element={<Address />} />
          </Route>
          <Route path="cart" element={<ShoppingBag />} />
        </Route>

        <Route
          element={<RequireAuth allowedRoles={[roles.ADMIN, roles.USER]} />}
        ></Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
