import PostList from "../../components/PostList";
import Sidebar from "../../components/Sidebar";

import "./style.css";

const Home = () => {
  const posts = [
    {
      id: 1,
      description: "Hello world this is the first test post created by me",
      created_data: "20 Aug 2008",
      image:
        "https://storage.googleapis.com/download/storage/v1/b/post-images-storage.appspot.com/o/%2Fposts%2F14a95db7-2627-403e-a563-6eaa9e8515d6.jpg?generation=1682161837243049&alt=media",

      user: {
        name: "Kanhaya yadav",
        profile_image:
          "https://storage.googleapis.com/download/storage/v1/b/post-images-storage.appspot.com/o/%2Fposts%2F63b6fcc3-4c5a-4539-b31a-bbe604d4d53a.jpg?generation=1675774630711560&alt=media",
      },
    },

    {
      id: 2,
      description: "This post is created by babitha, hello world this is the first test post created by me",
      user: {
        name: "Babitha Kumari",
        profile_image:
          "https://storage.googleapis.com/download/storage/v1/b/post-images-storage.appspot.com/o/%2Fposts%2F14a95db7-2627-403e-a563-6eaa9e8515d6.jpg?generation=1682161837243049&alt=media",
      },
    },

    {
      id: 3,
      description: "Hello world this is the first test post created by me",
      user: {
        name: "Kanhaya yadav",
        profile_image:
          "https://storage.googleapis.com/download/storage/v1/b/post-images-storage.appspot.com/o/%2Fposts%2F14a95db7-2627-403e-a563-6eaa9e8515d6.jpg?generation=1682161837243049&alt=media",
      },
    },

    {
      id: 4,
      description: "Hello world this is the first test post created by me",
      user: {
        name: "Kanhaya yadav",
        profile_image:
          "https://storage.googleapis.com/download/storage/v1/b/post-images-storage.appspot.com/o/%2Fposts%2F14a95db7-2627-403e-a563-6eaa9e8515d6.jpg?generation=1682161837243049&alt=media",
      },
    },
  ];
  return (
    <div className="home">
      <Sidebar />
      <div className="posts">
        <PostList posts={posts} />
      </div>
    </div>
  );
};

export default Home;
