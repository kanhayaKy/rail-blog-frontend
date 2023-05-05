import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">Network App</li>

        {isAuthenticated ? (
          <>
            <Link className="link" to="/">
              <li className="nav-item">Home</li>
            </Link>

            <li className="nav-item">Logout</li>
          </>
        ) : (
          <>
            <Link to={"/login"} className="link">
              <li className="nav-item">Login</li>
            </Link>
            <Link to={"/register"} className="link">
              <li className="nav-item">Sign up</li>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
