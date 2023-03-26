import theme from "./theme";
import translation from "./translation";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    theme,
    translation,
  },
});
export default store;
