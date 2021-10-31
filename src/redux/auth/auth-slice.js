import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUS = {
  fetching: "fetching",
  logging: "logging",
  logouting: "logouting",
  fulfilled: "fulfilled",
  rejected: "rejected",
};

axios.defaults.baseURL = "https://connections-api.herokuapp.com/users";

const setAxiosToken = (token) => {
  axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : "";
};

export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    if (!token) rejectWithValue();

    setAxiosToken(token);

    try {
      const { data } = await axios.get("/current");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/login", credentials);
      setAxiosToken(data.token);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/logout");
      setAxiosToken("");
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createUser = createAsyncThunk(
  "auth/createUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/signup", credentials);
      setAxiosToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  state.status = STATUS.rejected;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { name: null, email: null },
    token: null,
    status: STATUS.fetching,
    error: null,
  },

  extraReducers: {
    [fetchUser.fulfilled](state, action) {
      state.status = STATUS.fulfilled;
      state.user = action.payload;
    },
    [fetchUser.pending](state, action) {
      state.status = STATUS.fetching;
    },
    [fetchUser.rejected]: setError,
    [loginUser.fulfilled](state, action) {
      state.status = STATUS.fulfilled;
      state.user = action.payload.user;
      state.token = action.payload.token;
      console.log("action", action);
    },
    [loginUser.pending](state, action) {
      state.status = STATUS.logging;
    },
    [loginUser.rejected]: setError,
    [logoutUser.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.status = STATUS.rejected;
    },
    [createUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.token;
      state.status = STATUS.fulfilled;
    },
    [createUser.pending](state, action) {
      state.status = STATUS.logging;
    },
    [createUser.rejected]: setError,
  },
});

export default authSlice.reducer;
