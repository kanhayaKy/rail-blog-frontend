import {
  FavoriteBorder,
  ChatBubbleOutline,
  FavoriteOutlined,
} from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./style.css";
import { useState } from "react";
import PostService from "../../services/postServices";
import { CircularProgress } from "@mui/material";
import { deletePost, updatePost } from "../../store/reducers/posts";
import formatDate from "../../utils/date";

const PostDetails = ({ post }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleDeletePost = async () => {
    setIsLoading(true);
    try {
      const response = await PostService.deletePost(post.id);

      dispatch(deletePost(post.id));

      setTimeout(() => {
        setIsLoading(false);
        navigate("/");
      }, 500);
    } catch (error) {
      let message = "";
      if (error.response) {
        message = error.response.data.message;
      } else {
        message = "Could not Delete post, try again later";
      }
      setIsLoading(false);
      setError(message);
    }
  };

  const handleLikeClick = async (event) => {
    event.stopPropagation();
    if (!isAuthenticated) {
      return;
    }

    try {
      let response;

      if (!post.liked) {
        response = await PostService.likePost(post.id);
      } else {
        response = await PostService.dislikePost(post.id);
      }
      dispatch(updatePost(response?.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="post-details-wrapper">
      <div className="post-details-buttons">
        <div className="button-group">
          <button onClick={() => navigate(-1)}>
            <ArrowBackIcon />
            <span>Back</span>
          </button>
        </div>

        {isAuthenticated && user?.username === post?.author?.username && (
          <div className="button-group">
            <button onClick={() => navigate(`/posts/${post.id}/edit`)}>
              <EditIcon />
              <span>Edit</span>
            </button>
            {isLoading ? (
              <CircularProgress />
            ) : (
              <button onClick={() => handleDeletePost()}>
                <DeleteIcon />
                <span>Delete</span>
              </button>
            )}
          </div>
        )}
      </div>

      {error && <div className="post-detail-error-container">{error}</div>}

      <div className="post-details-container">
        {post.image && (
          <div className="post-details-image">
            <img src={post.image} alt="post preview" />
          </div>
        )}

        <div className="post-details-header">
          <img
            src={post?.author?.avatar ?? "/default_profile.png"}
            alt="author avatar"
          />
          <div className="author-info">
            <p>{post?.author?.name}</p>
            <p className="secondary-text">{formatDate(post.created_at)}</p>
          </div>
        </div>

        <div className="post-details-title">
          <h1>{post.title}</h1>
        </div>

        <div className="post-details-body">
          <p>{post.content}</p>
        </div>

        <div className="post-details-footer">
          <div className="post-details-reaction" onClick={handleLikeClick}>
            {post.liked ? (
              <FavoriteOutlined className="icon  liked" />
            ) : (
              <FavoriteBorder className="icon like" />
            )}
            <span>{post?.likes || 0} Likes</span>
          </div>

          <div className="post-details-reaction">
            <ChatBubbleOutline className="icon" />
            <span>{post?.comments?.length || 0} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
