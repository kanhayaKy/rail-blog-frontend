import "./style.css";

const Comment = ({ comment }) => {
  return (
    <div className="comment-container">
      <img
        src={comment.author?.profilePicture || "/default_profile.png"}
        alt="avatar"
      />
      <div className={"comment-author"}>
        <span className={"comment-author-name"}>
          {comment.author?.name}
          <span className={"comment-timestamp"}>
            {" "}
            {new Date(comment.created_at).toLocaleString("en-us")}
          </span>
        </span>
        <div className={"comment-text"}>{comment.comment}</div>
      </div>
    </div>
  );
};

export default Comment;
