import {
  AccessTimeOutlined,
  LocalFireDepartmentOutlined,
  StarBorderOutlined,
  HomeOutlined,
  PersonOutlined,
  LocalOfferOutlined,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { sortPosts } from "../../store/reducers/posts";

import "./style.css";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.posts);

  const handleFilterPosts = (category) => {
    console.log(category);
    dispatch(sortPosts(category));
  };

  const postFiltersData = {
    latest: {
      icon: <AccessTimeOutlined />,
    },

    hot: {
      icon: <LocalFireDepartmentOutlined />,
    },

    best: {
      icon: <StarBorderOutlined />,
    },
  };

  const navigationData = {
    Home: {
      icon: <HomeOutlined />,
      path: "/",
    },
    Profile: {
      icon: <PersonOutlined />,
      path: "/",
    },
    // Tags: {
    //   icon: <LocalOfferOutlined />,
    //   path: "/",
    // },
  };

  return (
    <div className="sidebar">
      <div className="menu">
        <h4>Sort by</h4>
        <ul>
          {Object.keys(postFiltersData).map((filterName) => (
            <li
              className={`${filter === filterName ? "selected" : ""}`}
              onClick={() => handleFilterPosts(filterName)}
            >
              {postFiltersData[filterName].icon}
              <span>{filterName}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="menu">
        <h4>Navigation</h4>
        <ul>
          {Object.keys(navigationData).map((navigation) => (
            <Link to={navigationData[navigation].path} className="link">
              <li>
                {navigationData[navigation].icon}
                <span>{navigation}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
