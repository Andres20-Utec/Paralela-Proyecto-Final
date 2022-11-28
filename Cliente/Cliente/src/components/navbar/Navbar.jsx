import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Navbar.css"

function CustomLink({ to, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props} />
    </li>
  )
}

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <CustomLink to="/">Eficiencia</CustomLink>
        <CustomLink to="/speed">Speed</CustomLink>
        <CustomLink to="/speedup">Speedup</CustomLink>
        <CustomLink to="/comunicacion">Tiempo de Comunicación</CustomLink>
        <CustomLink to="/fuerza">Tiempo de fuerza</CustomLink>
        <CustomLink to="/total">Tiempo total</CustomLink>
      </ul>
    </nav>
  )
}
