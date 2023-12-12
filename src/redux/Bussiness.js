import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    bussinessCard: [],
    bussinessShowProfile: null,
    bussinessSaved: null
}
export const bussinseReducer = createSlice({
    name: 'bussiness',
    initialState,
    reducers: {
        setBussiness: (state, action) => {
            state.bussinessCard = action.payload;
        },
        setBussinessSHowProfile: (state, action) => {
            console.log("statesProf>>", action.payload)
            state.bussinessShowProfile = action.payload;
        },
        setBussinessSaved: (state, action) => {
            state.bussinessSaved = action.payload
        }
    }
});


export const businessReduxState = (state) => state.business;


export const {
    setBussiness,
    setBussinessSHowProfile,
    setBussinessSaved
} = bussinseReducer.actions;


export default bussinseReducer.reducer;