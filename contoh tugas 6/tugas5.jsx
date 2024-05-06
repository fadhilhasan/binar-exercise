import { useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const crumbs = location.pathname.split("/").filter((crumb) => crumb !== "");

  return (
    <nav>
      {crumbs.map((crumb, index) => (
        <span key={index}>
          <Link to={`/${crumbs.slice(0, index + 1).join("/")}`}>{crumb}</Link>
          {index < crumbs.length - 1 && <span> / </span>}
        </span>
      ))}
    </nav>
  );
}
