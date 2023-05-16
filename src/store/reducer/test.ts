import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({
  name: "test",
  initialState: {
    name: "home",
  },
  reducers: {
    SET_NAME(state, action) {
      state.name = action.payload;
    },
  },
});
export const { SET_NAME } = testSlice.actions;

export default testSlice.reducer;
