import { useForm } from "react-hook-form";
import { CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./style.css";
import { addPost, updatePost } from "../../store/reducers/posts";
import { useState } from "react";
import PostService from "../../services/postServices";
import { ArrowBack } from "@mui/icons-material";

const PostForm = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      let response;
      setIsLoading(true);
      if (!post) {
        response = await PostService.createPost(data);
        dispatch(addPost(response.data));
      } else if (post && post.id) {
        response = await PostService.updatePost(post.id, data);
        dispatch(updatePost(response.data));
      }
      setIsLoading(false);

      setTimeout(() => navigate(`/posts/${response.data.id}`), 500);
    } catch (error) {
      let message;
      if (error.reponse) {
        message = error.response.data.message;
      } else {
        message = "Could not save, Please try again";
      }
      setError(message);
    }
  };

  return (
    <>
      <div className="buttons-container">
        <div className="button-group">
          <button onClick={() => navigate(-1)}>
            <ArrowBack />
            <span>Back</span>
          </button>
        </div>

        <div className="button-group">
          <button onClick={() => navigate("/")}>
            <span>Home</span>
          </button>
        </div>
      </div>
      <div className="post-form-container">
        <div className="post-form-header">
          <h2>{post ? "Edit" : "Create"} Post</h2>
        </div>

        {error && (
          <div className="post-form-error">
            <p>{error}</p>
          </div>
        )}
        <div className={"post-form"}>
          {error && (
            <p className="error" role="alert">
              {error}
            </p>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="post-form-field">
              <input
                defaultValue={post ? post.title : null}
                placeholder="Title for the post"
                {...register("title", { required: "title is required" })}
              />
              {errors.title && (
                <p className="error" role="alert">
                  {errors.title?.message}
                </p>
              )}
            </div>

            <div className="post-form-field">
              <textarea
                defaultValue={post ? post.content : null}
                placeholder="Content of the post"
                {...register("content")}
              />
              {errors.content && (
                <p className="error" role="alert">
                  {errors.content?.message}
                </p>
              )}
            </div>

            <div className="post-form-button">
              {isLoading ? (
                <CircularProgress />
              ) : (
                <input type="submit" value={"Save"} />
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostForm;
