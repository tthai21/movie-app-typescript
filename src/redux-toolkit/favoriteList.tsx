import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface favoriteList {
  favoriteList: any[];
  loading: boolean;
  error: string | null;
}

const initialState: favoriteList = {
  favoriteList: [],
  loading: false,
  error: null,
};

export const favoriteListSlice = createSlice({
  name: "favoriteList",
  initialState,
  reducers: {
    favoriteListFetch: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.favoriteList = action.payload;
    },
    favoriteListUpdateState: (state, action: PayloadAction<any>) => {
      state.loading = false;
      const exited = state.favoriteList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (exited === -1) {
        state.favoriteList.push(action.payload);
      } else {
        state.favoriteList.splice(exited, 1);
      }
    },
  },
});

export const { favoriteListUpdateState, favoriteListFetch } =
  favoriteListSlice.actions;
