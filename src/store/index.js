import { configureStore } from "@reduxjs/toolkit";
import weather from "./slices/weather/weatherSlice";

export default configureStore({
  reducer: {
    weather
  }
});
