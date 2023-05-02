import { FavoriteBorder, ChatBubbleOutline } from "@mui/icons-material";

const PostDetails = (data) => {
  return (
    <div>
      {data.image && (
        <div className="post-image">
          <img src={data.image} alt="post preview" />
        </div>
      )}

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

      <div className="post-title">
        <h2>{data.title}</h2>
      </div>

      <div className="post-body">
        <h2>{data.description}</h2>
      </div>

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
  );
};

export default PostDetails;
