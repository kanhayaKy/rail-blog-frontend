import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import PostDetails from "../../components/PostDetails";
import PostService from "../../services/postServices";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    const index = posts.findIndex((post) => post.id === id);
    if (index !== -1) {
      setPost(posts[index]);
    } else {
      try {
        const PostDetails = PostService.getPostById(id);
      } catch (error) {
        console.log("Error getting post data");
      }
    }
  }, [posts, id]);

  return (
    <div>
      <PostDetails />
    </div>
  );
};

export default Post;
