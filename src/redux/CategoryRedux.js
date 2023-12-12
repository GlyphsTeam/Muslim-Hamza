import { configureStore, createSlice } from '@reduxjs/toolkit';
import  aboutSlice  from './About';
import job from './Job';
import house from './House';
import business from './Bussiness';
import masjid from './Masjid';
import market from './Market';
import home from './Home';
import blog from './Blog'
const initialState = {
  categoryId: localStorage.getItem('mainCategoryId') ? localStorage.getItem('mainCategoryId') : '',
  subCategoryId: localStorage.getItem('subCategoryId') ? localStorage.getItem('subCategoryId') : '',
  categoryTitle: localStorage.getItem('mainCategoryTitle') ? localStorage.getItem('mainCategoryTitle') : '',
  subCategoryTitle: localStorage.getItem('subCategoryTitle') ? localStorage.getItem('subCategoryTitle') : '',
  isLoading: true
};

const category = createSlice({
  name: 'id',

  initialState,
  reducers: {

    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSubCategoryId: (state, action) => {
      state.subCategoryId = action.payload;
    },
    setCategoryTitle: (state, action) => {
      state.categoryTitle = action.payload;
    },
    setSubCategoryTitle: (state, action) => {
      state.subCategoryTitle = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload

    },
  },
});

export const { setCategoryId, setSubCategoryId, setCategoryTitle, setSubCategoryTitle, setLoading } = category.actions;
export const stateCategory = (state=>state);
const store = configureStore({
  reducer: {
    category: category.reducer,
    about:aboutSlice,
    job:job,
    house:house,
    business:business,
    masjid:masjid,
    market:market,
    home:home,
    blog:blog
  },
});

export default store;
