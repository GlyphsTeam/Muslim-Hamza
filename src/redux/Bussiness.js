import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    bussinessCard: []
}

export const bussinseReducer = createSlice({
    name: 'bussiness',
    initialState,
    reducers: {
        setBussiness: (state, action) => {
            state.bussinessCard = action.payload;
        }
    }
});


export const businessReduxState = (state) => state.bussiness;


export const {
    setBussiness
} = bussinseReducer.actions;


export default bussinseReducer.reducer;