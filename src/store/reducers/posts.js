import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PostServices from "../../services/postServices";

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
  current_post: {},
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (thunkAPI) => {
    try {
      const response = await PostServices.getPosts();
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getPostById = createAsyncThunk(
  "posts/getPost",
  async (id, thunkAPI) => {
    try {
      const response = await PostServices.getPostById(id);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    updatePost: (state, action) => {
      const updatedPost = action.payload;
      const index = state.posts.findIndex((post) => post.id === updatedPost.id);
      if (index !== -1) {
        state.posts[index] = updatedPost;
      }
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },

    setCurrentPost: (state, action) => {
      state.current_post = action.payload;
    },

    setLoadingState: (state, action) => {
      state.isLoading = true;
    },

    setErrorState: (state, action) => {
      state.isError = true;
      state.errorMessage = action.payload;
    },

    addComment: (state, action) => {
      state?.current_post?.comments?.push(action.payload);
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [fetchPosts.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = "Error occured while fetching posts";
    },

    [getPostById.pending]: (state) => {
      state.isLoading = true;
    },
    [getPostById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.current_post = action.payload;
    },
    [getPostById.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = "Error occured while fetching posts";
    },
  },
});

export const postReducer = postSlice.reducer;
export const { addPost, updatePost, deletePost, setCurrentPost } =
  postSlice.actions;
