import { useState } from "react";
import PostService from "../../services/postServices";
import "./style.css";

const CommmentForm = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCommentSubmit = () => {
    setIsLoading(true);
    try {
        const response = PostService.addComment()
    } catch (error) {}
  };

  return (
    <div className="comment-form-container">
      {error && <div className="comment-form-errors">{error}</div>}

      <div className="comment-form-items">
        <textarea />
        <button name="submit-button" disabled={isLoading}>
          {isLoading ? "commenting..." : "Comment"}
        </button>
      </div>
    </div>
  );
};

export default CommmentForm;
