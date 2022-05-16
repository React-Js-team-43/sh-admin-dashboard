import { Link, NavLink } from "react-router-dom"
import "../index.css"

const Sidebar = () => {
  const activeStyle = {
    color: "gray",
  }

  return (
    <section id="sidebar">
      <h2>SH-admin</h2>
      <NavLink
        to="home"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Home
      </NavLink>
      <NavLink
        to="members"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Members
      </NavLink>
      <Link to="/">Log out</Link>
    </section>
  )
}

export default Sidebar
