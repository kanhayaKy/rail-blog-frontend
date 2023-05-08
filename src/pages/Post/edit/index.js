import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../../../components/PostForm";
import { getPostById } from "../../../store/reducers/posts";

import "./style.css";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { current_post, isLoading } = useSelector((state) => state.posts);
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const isAuthorised =
    isAuthenticated && user.username === current_post?.author?.username;

  useEffect(() => {
    dispatch(getPostById(id));
  }, []);

  if (!isAuthorised) {
    navigate("/");
  }

  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        isAuthorised && (
            <PostForm post={current_post} />
        )
      )}
    </div>
  );
};

export default EditPost;
