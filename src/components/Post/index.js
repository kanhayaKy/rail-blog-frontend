import {
  FavoriteBorder,
  ChatBubbleOutline,
  FavoriteOutlined,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PostService from "../../services/postServices";
import { updatePost } from "../../store/reducers/posts";
import formatDate from "../../utils/date";

import "./style.css";

const Post = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.auth);

  const handlePostClick = () => {
    navigate(`/posts/${data.id}`);
  };

  const handleLikeClick = async (event) => {
    event.stopPropagation();
    if (!isAuthenticated) {
      return;
    }

    try {
      let response;

      if (!data.liked) {
        response = await PostService.likePost(data.id);
      } else {
        response = await PostService.dislikePost(data.id);
      }
      dispatch(updatePost(response?.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div onClick={handlePostClick} className="post-container">
      {data.image && (
        <div className="post-image">
          <img src={data.image} alt="post preview" />
        </div>
      )}
      <div className="post-body">
        <div className="post-header">
          <img
            src={data.author.avatar || "default_profile.png"}
            alt="author avatar"
          />
          <div className="author-info">
            <p>{data.author.name}</p>
            <p className="secondary-text">
              {formatDate(data.created_at)}
            </p>
          </div>
        </div>
        <div className="post-content">{data.title}</div>
        <div className="post-footer">
          <div className="post-reaction" onClick={handleLikeClick}>
            {data.liked ? (
              <FavoriteOutlined className="icon  liked" />
            ) : (
              <FavoriteBorder className="icon like" />
            )}
            <span>{data.likes} Likes</span>
          </div>

          <div className="post-reaction">
            <ChatBubbleOutline className="icon" />
            <span>{data?.comments?.length} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
