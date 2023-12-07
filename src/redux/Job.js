import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    jobs: [],
    total: [],
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
    showJobPage:null

}

export const jobsReducer = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        setJobs: (state, action) => {
            state.jobs = action.payload;
        },
        setJobTotal: (state, action) => {
            state.total = action.payload;
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
        setMobileFilter: (state, action) => {
            state.mobileFilter = action.payload;
        },
        setActiveIndex: (state, action) => {
            state.activeIndex = action.payload;
        },
        setGender: (state, action) => {
            state.gender = action.payload;
        },
        setActiveFilter: (state, action) => {
            state.activeFilter = action.payload
        },
        setShowJobPage: (state, action) => {
            state.showJobPage = action.payload;
        }
    }
});

export const jobsReduxState = (state) => state.job;

export const {
    setJobs,
    setJobTotal,
    setPage,
    setLimit,
    setKeyWord,
    setZipCode,
    setCity,
    setType,
    setMobileFilter,
    setActiveIndex,
    setGender,
    setActiveFilter,
    setShowJobPage
} = jobsReducer.actions;

export default jobsReducer.reducer;