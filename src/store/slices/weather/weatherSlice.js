import { createSlice } from "@reduxjs/toolkit";

export const weather = createSlice({
  name: `Weather`,
  initialState: {},
  reducers: {
    data: (state, action) => (state = action.payload)
  }
});

export const { data } = weather.actions;

export default weather.reducer;
