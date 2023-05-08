import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Comment from "../../components/Comment";
import CommentList from "../../components/CommentList";
import PostDetails from "../../components/PostDetails";
import PostService from "../../services/postServices";
import { getPostById, setCurrentPost } from "../../store/reducers/posts";

import "./style.css";

const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { posts, current_post, isLoading } = useSelector(
    (state) => state.posts
  );

  useEffect(() => {
    if (current_post && current_post.id === id) {
      return;
    }

    const index = posts.findIndex((post) => post.id === id);
    if (index !== -1) {
      dispatch(setCurrentPost(posts[index]));
    } else {
      dispatch(getPostById(id));
    }
  }, []);

  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <PostDetails post={current_post} />
          <CommentList comments={current_post?.comments} />
        </>
      )}
    </div>
  );
};

export default Post;
