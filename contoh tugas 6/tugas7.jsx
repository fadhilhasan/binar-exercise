import { useNavigate } from "react-router-dom";

function MyComponent() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/new-route");
  }

  return <button onClick={handleClick}>Go to New Route</button>;
}
