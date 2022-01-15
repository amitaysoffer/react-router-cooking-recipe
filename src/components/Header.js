import { NavLink, Link } from "react-router-dom";
import "./Header.css";

const Header = ({ searchCard }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <NavLink to="/">
            <h1>Cooking Ninja</h1>
          </NavLink>
        </div>
        <nav style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ display: "flex" }}>
            <label htmlFor="search">Search:</label>
            <input
              type="text"
              name="search"
              id="search"
              onChange={(e) => searchCard(e.target.value)}
            />
          </div>
          <Link className="button" to="/create">
            Create Recipe
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
