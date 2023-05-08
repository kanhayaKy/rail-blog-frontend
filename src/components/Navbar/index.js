import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../store/reducers/auth";
import "./style.css";

const Navbar = () => {
  const dispatch = useDispatch()

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <nav className="navbar">
      <ul>
        <li className="brand">LeafyBlog</li>

        {isAuthenticated ? (
          <>
            <li className="nav-item user-name">{user.first_name}</li>

            <Link className="link" to="/">
              <li onClick={handleLogout} className="nav-item">Logout</li>
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
