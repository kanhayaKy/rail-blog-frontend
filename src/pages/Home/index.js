import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostList from "../../components/PostList";
import Sidebar from "../../components/Sidebar";
import { fetchPosts } from "../../store/reducers/posts";

import "./style.css";

const Home = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch, isAuthenticated]);

  return (
    <div className="home">
      <Sidebar />
      <div className="posts">
        {isLoading ? <div>Loading ...</div> : <PostList posts={posts} />}
      </div>
    </div>
  );
};

export default Home;
