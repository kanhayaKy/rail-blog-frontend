import { FavoriteBorder, ChatBubbleOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import "./style.css";

const Post = ({ data }) => {
  const navigate = useNavigate();

  const handlePostClick = () => {
    navigate(`/posts/${data.id}`);
  };

  return (
    <div onClick={handlePostClick} className="post-container">
      {data.image && (
        <div className="post-image">
          <img src={data.image} alt="post preview" />
        </div>
      )}
      <div className="post-body">
        <div className="post-header">
          <img src={data.author.profile_image} alt="author avatar" />
          <div className="author-info">
            <p>{data.author.name}</p>
            <p className="secondary-text">
              {new Date(data.created_at).toLocaleString("en-us", {
                datestyle: "medium",
              })}
            </p>
          </div>
        </div>
        <div className="post-content">{data.description}</div>
        <div className="post-footer">
          <div className="post-reaction">
            <FavoriteBorder className="icon" />
            <span>Likes</span>
          </div>

          <div className="post-reaction">
            <ChatBubbleOutline className="icon" />
            <span>Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
