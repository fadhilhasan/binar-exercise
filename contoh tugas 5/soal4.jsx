import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/products" element={<Products />}>
        <Route path="/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
}
