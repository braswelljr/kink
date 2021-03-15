import { theme } from "../slices/theme/themeSlice";

export const colors = payload => ({
  type: theme,
  payload
});
