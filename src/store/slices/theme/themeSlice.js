import { createSlice } from "@reduxjs/toolkit";

export const theme = createSlice({
  name: `theme`,
  initialState: {},
  reducers: {
    theming: (state, action) => (state = action.payload)
  }
});

export const { theming } = theme.actions;

export default theme.reducer;
