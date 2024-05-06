import { useNavigate } from "react-router-dom";

function PrivateRoute({ isAuthenticated, ...props }) {
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  return <Route {...props} />;
}
