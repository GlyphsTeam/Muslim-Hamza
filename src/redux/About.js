import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    aboutText: null,
}

export const aboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {
        setAboutText: (state, action) => {
            state.aboutText = action.payload;
        },
    
    }
})

export const aboutReduxState = (state) => state.about;

export const {
    setAboutText,
} = aboutSlice.actions;

export default aboutSlice.reducer;