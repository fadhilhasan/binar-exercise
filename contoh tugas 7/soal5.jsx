import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function UserList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = () => {
    setSearchParams({ q: searchTerm });
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>{/* Render user list based on search term */}</ul>
    </div>
  );
}
