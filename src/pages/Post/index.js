import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CommentList from "../../components/CommentList";
import PostDetails from "../../components/PostDetails";
import { getPostById, setCurrentPost } from "../../store/reducers/posts";
import NotFound from "../404";

import "./style.css";

const Post = () => {
  const { id, username } = useParams();
  const dispatch = useDispatch();

  const { posts, current_post, isLoading, errorMessage } = useSelector(
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
      dispatch(getPostById({ username, id }));
    }
  }, []);


  return (
    <div className="post-wrapper">
      {!current_post.id && errorMessage && <NotFound />}

      {isLoading ? (
        <CircularProgress />
      ) : (
        current_post.id && (
          <>
            <PostDetails post={current_post} />
            <CommentList comments={current_post?.comments} />
          </>
        )
      )}
    </div>
  );
};

export default Post;
