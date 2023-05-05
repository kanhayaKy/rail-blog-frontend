import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../../services/authService";

const initialState = {
  user: {},
  isAuthenticated: false,
  isLoading: false,
  error: "",
};

export const authorizeUser = createAsyncThunk(
  "auth/login",
  async (args, thunkAPI) => {
    try {
      let response;
      if (args.type === "register") {
        response = await AuthService.registerUser(args.user);
      } else if (args.type === "login") {
        response = await AuthService.loginUser(args.user);
      } else if (args.type === "checkAuth") {
        response = await AuthService.checkAuth();
      }
      return response?.data;
    } catch (error) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data.error);
      }
      return thunkAPI.rejectWithValue("Something went wrong, try again");
    }
  }
);

export const logoutUser = createAsyncThunk();

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    setError(state, action) {
      state.error = action.payload;
    },
  },

  extraReducers: {
    [authorizeUser.pending]: (state) => {
      state.error = "";
      state.isLoading = true;
    },
    [authorizeUser.fulfilled]: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.error = "";
    },
    [authorizeUser.rejected]: (state, action) => {
      localStorage.removeItem("token")
      state.error = action.payload;
      state.isLoading = false;
    },
    [logoutUser.fulfilled]: (state, action) => {
      localStorage.removeItem("token");
      state.user = {};
      state.isAuthenticated = false;
    },
    [logoutUser.rejected]: (state, action) => {
      state.error = action.payload.response.data.message;
    },
  },
});

export const authReducer = authSlice.reducer;
