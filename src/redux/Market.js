import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    marketList: [],
    page: 1,
    limit: 12,
    mobileFilter: false,
    activeIndex: 0,
    categoryState: { mainId: '', subId: '', activeFilterTitle: '', activeSubFilterTitle: '' },
    activeFilter: '',
    type: '',
    city: '',
    gender: '',
    showProductItem: null
}


const marketRedcer = createSlice({
    name: 'market',
    initialState,
    reducers: {
        setMarketList: (state, action) => {
            state.marketList = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setLimit: (state, action) => {
            state.limit = action.payload;
        },
        setMobileFilter: (state, action) => {
            state.mobileFilter = action.payload;
        },
        setActiveIndex: (state, action) => {
            state.activeIndex = action.payload;
        },
        setCategoryState: (state, action) => {
            state.categoryState = action.payload;
        },
        setActiveFilter: (state, action) => {
            state.activeFilter = action.payload;
        },
        setType: (state, action) => {
            state.type = action.payload;
        },
        setGender: (state, action) => {
            state.gender = action.payload;
        },
        setCity: (state, action) => {
            state.city = action.payload;
        },
        setShowProduct: (state, action) => {
            state.showProductItem = action.payload;
        }
    }
});

export const marketState = (state) => state;

export const {
    setMarketList,
    setPage,
    setLimit,
    setMobileFilter,
    setActiveIndex,
    setCategoryState,
    setActiveFilter,
    setType,
    setGender,
    setCity,
    setShowProduct
} = marketRedcer.actions;

export default marketRedcer.reducer;