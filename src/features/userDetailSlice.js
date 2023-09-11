import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create action
export const createUser = createAsyncThunk(
  "createUser",async (data, { rejectWithValue }) => {
    const response = await fetch("https://64fe8fa9f8b9eeca9e28cf7b.mockapi.io/users", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue("fatching data error");
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
    },
  
});
export default userDetail.reducer;
