import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Logic
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Logic
    setIsLoggedIn(false);
  };

  return (
    <Routes>
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <PrivateRoute
        path="/dashboard"
        element={<Dashboard onLogout={handleLogout} />}
        isLoggedIn={isLoggedIn}
      />
    </Routes>
  );
}

// Komponen Login
function Login({ onLogin }) {
  const handleLogin = () => {
    // Logic
    onLogin();
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

// Komponen Dashboard
function Dashboard({ onLogout }) {
  const handleLogout = () => {
    // Logic
    onLogout();
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

function PrivateRoute({ element, isLoggedIn, ...rest }) {
  return isLoggedIn ? element : <Navigate to="/login" />;
}

export default App;
