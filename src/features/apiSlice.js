import { createSlice } from '@reduxjs/toolkit';

const sliderSlice = createSlice({
  name: 'slider',
  initialState: {
    value: 0,
  },
  reducers: {
    nextSlide: (state) => {
      state.value += 1;
    },
    prevSlide: (state) => {
      state.value -= 1;
    },
  },
});

export const { nextSlide, prevSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
