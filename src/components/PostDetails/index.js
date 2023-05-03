import { FavoriteBorder, ChatBubbleOutline } from "@mui/icons-material";
import "./style.css";

const PostDetails = ({ post }) => {
  return (
    <div className="post-details-container">
      {post.image && (
        <div className="post-details-image">
          <img src={post.image} alt="post preview" />
        </div>
      )}

      <div className="post-details-header">
        <img src={post?.author?.profile_image} alt="author avatar" />
        <div className="author-info">
          <p>{post?.author?.name}</p>
          <p className="secondary-text">
            {new Date(post.created_at).toLocaleString("en-us", {
              datestyle: "medium",
            })}
          </p>
        </div>
      </div>

      <div className="post-details-title">
        <h1>{post.title} Hello world titile</h1>
      </div>

      <div className="post-details-body">
        <p>{post.description}</p>
      </div>

      <div className="post-details-footer">
        <div className="post-details-reaction">
          <FavoriteBorder className="icon" />
          <span>{post?.likes || 0 } Likes</span>
        </div>

        <div className="post-details-reaction">
          <ChatBubbleOutline className="icon" />
          <span>{post?.comments?.length || 0} Comments</span>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
