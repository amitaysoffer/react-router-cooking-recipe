import { NavLink, Link } from "react-router-dom"
import "./Header.css"
import { useTheme } from "../useTheme"

const Header = ({ searchCard }) => {
  const { color, changeColor } = useTheme()

  return (
    <header
      className="header"
      style={{ background: color }}
      onClick={() => changeColor("green")}
    >
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
  )
}

export default Header
