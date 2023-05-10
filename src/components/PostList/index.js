import Post from "../Post";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

import "./style.css";
import { useNavigate } from "react-router-dom";

const PostList = ({ posts, error }) => {
  const navigate = useNavigate();

  return (
    <div>
      {error ? (
        <div className="posts-error">{error}</div>
      ) : (
        <div className="posts-list">
          <div
            className="posts-list-create"
            onClick={() => navigate("/posts/create")}
          >
            <AddCircleOutlinedIcon className="icon" />
            <span> Create new post</span>
          </div>
          {posts.map((post) => (
            <Post key={post.id} data={post} />
          ))}

          {posts.length <= 0 && <span>No Posts to display</span>}
        </div>
      )}
    </div>
  );
};

export default PostList;
