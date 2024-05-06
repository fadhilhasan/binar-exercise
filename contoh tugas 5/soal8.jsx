import { useLocation } from "react-router-dom";

function SearchResults() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  return <div>Hasil pencarian untuk: {query}</div>;
}
