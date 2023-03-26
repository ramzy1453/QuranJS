import { createSlice } from "@reduxjs/toolkit";

const translationSlice = createSlice({
  name: "translation",
  initialState: navigator.language,
  reducers: {
    setTranslation(state, action) {
      return (state = action.payload);
    },
  },
});

export const translationActions = translationSlice.actions;
export default translationSlice.reducer;
