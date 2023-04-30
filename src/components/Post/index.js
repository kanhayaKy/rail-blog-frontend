import { FavoriteBorder, ChatBubbleOutline } from "@mui/icons-material";

import "./style.css";

const Post = ({ data }) => {
  return (
    <div className="post-container">
      {data.image && (
        <div className="post-image">
          <img src={data.image} alt="post preview" />
        </div>
      )}
      <div className="post-body">
        <div className="post-header">
          <img src={data.user.profile_image} alt="author avatar" />
          <div className="author-info">
            <p>{data.user.name}</p>
            <p className="secondary-text">{data.created_data}</p>
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
