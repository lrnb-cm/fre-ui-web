import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openSideBar: false,
};

const UISlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.openSideBar = !state.openSideBar;
    },
  },
  extraReducers: {},
});

export const { toggleSideBar } = UISlice.actions;

export default UISlice.reducer;
