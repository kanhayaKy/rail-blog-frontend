import Post from "../Post";

const PostList = ({ posts, error }) => {
  return (
    <div>
      {error ? (
        <div className="posts-error">some error occured</div>
      ) : (
        <div className="posts-list">
          {posts.map((post) => (
            <Post data={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;
