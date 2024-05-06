import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>Header</header>
      <main>
        <Outlet />{" "}
        {/* Komponen Outlet digunakan untuk merender komponen-komponen turunan */}
      </main>
      <footer>Footer</footer>
    </div>
  );
}

// Di dalam komponen App
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... */}
      </Route>
    </Routes>
  );
}
