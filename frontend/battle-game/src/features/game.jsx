import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [
    {
      userId: "",
      userName: "",
      userImage: "",
      userMoney: 4000,
      userHp: 100,
      userGold: 0,
    },
  ],
};

export const gameSlice = createSlice({
  name: "game",
  initialState,

  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { updateUser } = gameSlice.actions;
export default gameSlice.reducer;
