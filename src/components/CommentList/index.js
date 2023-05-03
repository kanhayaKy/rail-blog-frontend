import Comment from "../Comment";
import CommmentForm from "../CommentForm";

import "./style.css";

const CommentList = ({ comments }) => {
  return (
    <div className="comments-list-container">
      <CommmentForm />

      {comments?.map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
