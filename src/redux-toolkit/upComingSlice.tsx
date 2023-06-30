import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface upComingState {
  moviesList: movieType[];
  loading: boolean;
  error: string | null;
}

const initialState: upComingState = {
  moviesList: [],
  loading: false,
  error: null,
};

export const upComingSlice = createSlice({
  name: "upComing",
  initialState,
  reducers: {
    upComingUpdateState: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.moviesList = action.payload;
    },
  },
});

export const { upComingUpdateState } = upComingSlice.actions;
