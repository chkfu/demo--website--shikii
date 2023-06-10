// from package
import { createSlice } from '@reduxjs/toolkit';

export const exploreSlice = createSlice({
  name: 'explore',
  initialState: {
    search: '',
    sorter: '-createdat',
    currPage: 1,
    pageLimit: 12,
    filterHidden: true
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSorter: (state, action) => {
      state.sorter = action.payload;
    },
    setCurrPage: (state, action) => {
      state.currPage = action.payload;
    },
    setPageLimit: (state, action) => {
      state.pageSize = action.payload;
    },
    resetFilter: (state, action) => {
      state.search = '';
      state.sorter = '-createdat';
      state.currPage = 1;
      state.pageSize = 12;
    },
    setFilterHidden: (state, action) => {
      state.filterHidden = action.payload;
    }
  }
});

export const { setSearch, setSorter, setCurrPage, setPageLimit, resetFilter, setFilterHidden } = exploreSlice.actions;

export default exploreSlice.reducer;