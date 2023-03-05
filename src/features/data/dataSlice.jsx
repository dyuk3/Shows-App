import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk('shows/getShows', async () => {
  return fetch('https://api.tvmaze.com/search/shows?q=all').then((res) =>
    res.json()
  );
});

// const initialState = {
//   shows: 
// };

export const dataSlice = createSlice({
  name: 'shows',
  initialState: {
    shows: [],
    loading: false,
  },
  reducers: {
    shopSummary: (state, action) => {
      state.shows.filter((show) => show.show.id !== action.payload);
    }
  },
  extraReducers: {
    [getData.pending]: (state, action) => {
      state.loading = true;
    },
    [getData.fulfilled]: (state, action) => {
      state.loading = false;
      state.shows = action.payload;
    },
    [getData.rejected]: (state, action) => {
      state.loading = false;
    },
  }
});


export default dataSlice.reducer;