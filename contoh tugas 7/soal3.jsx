import { createRoutesFromElements } from "react-router-dom";

const routes = createRoutesFromElements([
  <Route path="/" element={<Home />} />,
  <Route path="/about" element={<About />} />,
  // other route elements
]);
