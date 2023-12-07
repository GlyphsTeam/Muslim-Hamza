import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    housing: [],
    page: 1,
    limit: 9,
    keyword: '',
    zipCode: '',
    city: '',
    type: '',
    gender: '',
    mobileFilter: false,
    activeIndex: 0,
    activeFilter: '',
    houseShowData: null,
};

export const houseReducer = createSlice({
    name: 'houseing',
    initialState,
    reducers: {
        setHousing: (state, action) => {
            state.housing = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setLimit: (state, action) => {
            state.limit = action.payload
        },
        setKeyWord: (state, action) => {
            state.keyword = action.payload
        },
        setZipCode: (state, action) => {
            state.zipCode = action.payload;
        },
        setCity: (state, action) => {
            state.city = action.payload;
        },
        setType: (state, action) => {
            state.type = action.payload;
        },
        setGender: (state, action) => {
            state.gender = action.payload;
        },
        setMobileFilter: (state, action) => {
            state.mobileFilter = action.payload;
        },
        setActiveIndex: (state, action) => {
            state.activeIndex = action.payload;
        },
        setActiveFilter: (state, action) => {
            state.activeFilter = action.payload
        },
        setShowHouseDate: (state, action) => {
            state.houseShowData= action.payload
        }

    }
});

export const houseReduxState = (state) => state.house;

export const {
    setHousing,
    setPage
    , setLimit
    , setKeyWord
    , setZipCode
    , setCity,
    setType,
    setGender
    , setMobileFilter
    , setActiveIndex,
    setActiveFilter,
    setShowHouseDate
} = houseReducer.actions;

export default houseReducer.reducer;