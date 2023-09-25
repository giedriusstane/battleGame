import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedImage: "",
};

export const gameSlice = createSlice({
  name: "game",
  initialState,

  reducers: {
    updateSelectedImage: (state, action) => {
      state.selectedImage = action.payload;
    },
  },
});

export const { updateSelectedImage } = gameSlice.actions;
export default gameSlice.reducer;
