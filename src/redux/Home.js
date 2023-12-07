import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    homeData: null,
}

const homeReducer = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setDateHome: (state, action) => {
            state.homeData = action.payload;
        }
    }
});

export const homeState = (state) => state.home;

export const { setDateHome } = homeReducer.actions;

export default homeReducer.reducer;