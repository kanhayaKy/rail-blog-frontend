import { useNavigate } from "react-router-dom";

import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

const CreatePost = () => {
  const navigate = useNavigate();

  return (
    <div
      className="posts-list-create"
      onClick={() => navigate("/posts/create")}
    >
      <AddCircleOutlinedIcon className="icon" />
      <span> Create new post</span>
    </div>
  );
};

export default CreatePost;
