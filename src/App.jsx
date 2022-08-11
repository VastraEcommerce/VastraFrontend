import About from "./pages/About";
import Login from "./pages/Account/login/Login";
import Register from "./pages/Account/register/Register";
import Address from "./pages/Address";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import RequireAuth, { roles } from "./features/auth/RequireAuth";
import UserList from "./test/UserList"; // for testing onley it will be removed
import Welcome from "./test/Welcome"; // for testing onley it will be removed
import AdminMain from "./admin/AdminMain";
import AdminLogin from "./admin/pages/AdminLogin";
import Products from "./admin/pages/Products";
import Dashboard from "./admin/pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/admin">
        <Route path="login" element={<AdminLogin />} />
        <Route element={<AdminMain />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Route>
      <Route path="/" element={<Layout />}>
        {/* Puplic Routes */}
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="cart" element={<div>Cart</div>} />
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
        </Route>

        <Route element={<RequireAuth allowedRoles={[roles.ADMIN]} />}>
          <Route path="userslist" element={<UserList />} />
        </Route>

        <Route
          element={<RequireAuth allowedRoles={[roles.ADMIN, roles.USER]} />}
        >
          <Route path="welcome" element={<Welcome />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
