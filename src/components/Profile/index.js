import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserService from "../../services/userService";
import { followUser, unfollowUser } from "../../store/reducers/auth";
import "./style.css";

const Profile = ({ user }) => {
  const dispatch = useDispatch();
  const current_user = useSelector((state) => state.auth.user);

  const [isLoading, setIsLoading] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    let followed = [];
    followed = current_user?.following?.filter(
      (following_user) => following_user.username === user.username
    );

    setIsFollowing(Boolean(followed?.length));
  }, []);

  const follow = async () => {
    try {
      setIsLoading(true);
      await UserService.followUser(user?.username);
      dispatch(followUser(user));
      setIsLoading(false);
      setIsFollowing(true);
      user.followers.push(current_user);
    } catch {
      setIsLoading(false);
    }
  };

  const unfollow = async () => {
    try {
      setIsLoading(true);
      await UserService.unfollowUser(user?.username);
      dispatch(unfollowUser(user.username));
      setIsLoading(false);
      setIsFollowing(false);

      user.followers = user.followers.filter(
        (followed_users) => followed_users.username !== current_user.username
      );
    } catch {
      setIsLoading(false);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-image">
          <img src="/default_profile.png" alt="Profile" />
        </div>

        <div className="profile-user-details">
          <div className="flex-row-container">
            <div>
              <p>
                {user?.first_name} {user?.last_name}
              </p>
              <p className="profile-email">{user?.username}</p>
            </div>
            {current_user && current_user.username !== user?.username && (
              <div className="profile-follow-button">
                {isLoading ? (
                  <CircularProgress />
                ) : (
                  <button onClick={isFollowing ? unfollow : follow}>
                    {isFollowing ? "Unfollow" : "Follow"}
                  </button>
                )}
              </div>
            )}
          </div>
          <div className="flex-row-container profile-follow-details">
            <p>{user?.posts_count || 0} Posts</p>
            <p>{user?.following?.length} Following</p>
            <p>{user?.followers?.length} Followers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
