import "./style.css";

import { useSelector } from "react-redux";
import Profile from "../../components/Profile";
import Sidebar from "../../components/Sidebar";

const ProfilePage = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="profile-page">
      <Sidebar />
      <div className="profile">
        <Profile user={user} />
      </div>
    </div>
  );
};

export default ProfilePage;
