// from package
import { createSlice } from '@reduxjs/toolkit';

export const faqSlice = createSlice({
  name: 'faq',
  initialState: {
    categorySelected: 'none',
    questionSelected: 'none'
  },
  reducers: {
    setCategorySelection: (state, action) => {
      state.categorySelected = action.payload;
    },
    setQuestionSelection: (state, action) => {
      state.questionSelected = action.payload;
    }
  }
});

export const { setCategorySelection, setQuestionSelection } = faqSlice.actions;

export default faqSlice.reducer;