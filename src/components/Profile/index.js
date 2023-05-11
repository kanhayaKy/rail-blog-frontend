import "./style.css";
const Profile = ({ user }) => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <p>My Profile</p>
      </div>

      <div className="profile-card">
        <div className="profile-image">
          <img src="default_profile.png" alt="Profile" />
        </div>

        <div className="profile-user-details">
          <p>
            {user.first_name} {user.last_name}
          </p>
          <p className="profile-email">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
