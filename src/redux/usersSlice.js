import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.unshift(action.payload);
    },
    updateUser: (state, action) => {
      const index = state.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
    deleteUser: (state, action) => {
      return state.filter((u) => u.id !== action.payload);
    },
    setUsers: (state, action) => {
      return action.payload;
    },
  },
});

export const { addUser, updateUser, deleteUser, setUsers } = usersSlice.actions;
export default usersSlice.reducer;
