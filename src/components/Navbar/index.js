import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">LeafyBlog</li>

        {isAuthenticated ? (
          <>
            <li className="nav-item user-name">{user.first_name}</li>

            <Link className="link" to="#">
              <li className="nav-item">Logout</li>
            </Link>
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
