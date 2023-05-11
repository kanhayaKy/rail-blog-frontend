import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../store/reducers/auth";
import "./style.css";

const Navbar = () => {
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="navbar">
      <ul>
        <Link className="link brand" to="/">
          <li className="brand">LeafyBlog</li>
        </Link>

        {isAuthenticated ? (
          <>
            <Link className="link" to="/posts/create">
              <li className="nav-item">Create</li>
            </Link>

            <Link className="link" to="/profile">
              <li className="nav-item user-name">{user.first_name}</li>
            </Link>

            <Link className="link" to="/">
              <li onClick={handleLogout} className="nav-item">
                Logout
              </li>
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
