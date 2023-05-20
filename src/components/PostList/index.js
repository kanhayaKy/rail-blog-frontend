import Post from "../Post";

import "./style.css";

const PostList = ({ posts, error }) => {

  return (
    <div>
      {error ? (
        <div className="posts-error">{error}</div>
      ) : (
        <div className="posts-list">

          {posts.map((post) => (
            <Post key={post.id} data={post} />
          ))}

          {posts.length <= 0 && <span>No Posts to display</span>}
        </div>
      )}
    </div>
  );
};

export default PostList;
