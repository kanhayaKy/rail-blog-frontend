import formatDate from "../../utils/date";
import "./style.css";

const Comment = ({ comment }) => {
  return (
    <div className="comment-container">
      <div>
        <div className={"comment-author"}>
          <img
            src={comment.author?.profilePicture || "/default_profile.png"}
            alt="avatar"
          />

          <div className="comment-author-details">
            <span className={"comment-author-name"}>
              {comment.author?.name}
            </span>

            <span className={"comment-timestamp"}>
              {formatDate(comment.created_at)}
            </span>
          </div>
        </div>
        <div className={"comment-text"}>{comment.comment}</div>
      </div>
    </div>
  );
};

export default Comment;
