import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostService from "../../services/postServices";
import { addComment } from "../../store/reducers/posts";
import "./style.css";

const CommmentForm = () => {
  const dispatch = useDispatch();

  const { current_post } = useSelector((state) => state.posts);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [comment, setComment] = useState("");

  const handleCommentSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await PostService.addComment(
        current_post.author.username,
        current_post.id,
        {
          comment,
        }
      );
      setComment("");
      dispatch(addComment(response.data));
    } catch (error) {
      let message = "";
      if (error.response) {
        message = error.response.data.message;
      } else {
        message = "Could not post comment, try again later";
      }
      setError(message);
    }
    setIsLoading(false);
  };

  return (
    <div className="comment-form-container">
      {error && <div className="comment-form-errors">{error}</div>}

      <div className="comment-form-items">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your thoughts"
        />
        {isLoading ? (
          <CircularProgress />
        ) : (
          <button
            name="submit-button"
            onClick={handleCommentSubmit}
            disabled={isLoading || !comment.length}
          >
            Comment
          </button>
        )}
      </div>
    </div>
  );
};

export default CommmentForm;
