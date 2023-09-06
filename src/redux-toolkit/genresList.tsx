import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface genresState {
  genresList: any[];
  loading: boolean;
  error: string | null;
}

const initialState: genresState = {
  genresList: [],
  loading: false,
  error: null,
};

export const genresListSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    genresUpdateState: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.genresList = action.payload;
    },
  },
});

export const { genresUpdateState } = genresListSlice.actions;
