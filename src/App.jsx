import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <div className="bg-primary text-center mx-auto">Hello for all pages</div>;
      <div className="container">
        <Routes>
          <Route path="/">
            <Route index element={<div>Home Page</div>} />
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
