import "./style.css";

import { useParams } from "react-router-dom";
import Profile from "../../components/Profile";
import Sidebar from "../../components/Sidebar";
import PostList from "../../components/PostList";
import { useEffect, useState } from "react";
import PostService from "../../services/postServices";
import UserService from "../../services/userService";

const ProfilePage = () => {
  const { username } = useParams();
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getUserAndPosts = async () => {
    setIsLoading(true);

    try {
      const promises = [
        UserService.getUserDetails(username),
        PostService.getUserPosts(username),
      ];

      const [userResponse, postsResponse] = await Promise.all(promises);
      setPosts(postsResponse.data);
      setUser(userResponse.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getUserAndPosts();
  }, [username]);

  return (
    <div className="profile-page">
      <Sidebar />
      {!isLoading && (
        <div className="profile">
          <Profile user={user} />

          <div className="profile-page-posts-container">
            <div className="profile-page-posts-header">Posts</div>
            <PostList posts={posts} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
