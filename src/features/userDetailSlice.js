import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://64fe8fa9f8b9eeca9e28cf7b.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue("fatching data error");
    }
  }
);

//read action
export const showUser = createAsyncThunk(
  "showUser",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://64fe8fa9f8b9eeca9e28cf7b.mockapi.io/users"
    );
    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);

//User delete for single id
export const deleteUser = createAsyncThunk(
  "userDelete",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://64fe8fa9f8b9eeca9e28cf7b.mockapi.io/users/${id}`,
      {
        method: "DELETE",
      }
    );
    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);
export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [createUser.pending]: (state) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [showUser.pending]: (state) => {
      state.loading = true;
    },
    [showUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [showUser.rejected]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [deleteUser.pending]: (state) => {
      state.loading = false;
     
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      if (id) {
        state.users = state.users.filter((ele) => ele.id !== id);
        console.log("delete action", action.payload);
      }
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
  },
});
export default userDetail.reducer;
