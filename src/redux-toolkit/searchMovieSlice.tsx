import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface recentState {
  searchList: any[];
  loading: boolean;
  error: string | null;
}

const initialState: recentState = {
  searchList: [],
  loading: false,
  error: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchUpdateState: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.searchList = action.payload;
    },
  },
});

export const { searchUpdateState } = searchSlice.actions;
