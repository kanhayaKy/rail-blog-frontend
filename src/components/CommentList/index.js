import { useSelector } from "react-redux";
import Comment from "../Comment";
import CommmentForm from "../CommentForm";

import "./style.css";

const CommentList = ({ comments }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="comments-list-container">
      <div className="comments-header">Comments</div>
      {isAuthenticated && <CommmentForm />}
      {comments?.map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
