import {
  AccessTimeOutlined,
  LocalFireDepartmentOutlined,
  StarBorderOutlined,
  HomeOutlined,
  PersonOutlined,
  LocalOfferOutlined,
} from "@mui/icons-material";

import { Link } from "react-router-dom";

import "./style.css";

const Sidebar = () => {
  const handleFilterPosts = (category) => {};

  const postFiltersData = {
    Latest: {
      icon: <AccessTimeOutlined />,
    },

    Hot: {
      icon: <LocalFireDepartmentOutlined />,
    },

    Best: {
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
    Tags: {
      icon: <LocalOfferOutlined />,
      path: "/",
    },
  };

  return (
    <div className="sidebar">
      <div className="menu">
        <h4>Sort by</h4>
        <ul>
          {Object.keys(postFiltersData).map((filter) => (
            <li onClick={() => handleFilterPosts(filter)}>
              {postFiltersData[filter].icon}
              <span>{filter}</span>
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
