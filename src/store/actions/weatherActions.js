import { weather } from "../slices/weather/weatherSlice";

export const data = payload => ({
  type: weather,
  payload
});
