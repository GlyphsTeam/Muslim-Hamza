import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    masjidList: [],
}

const masjidSlice = createSlice({
    name: 'masjid',
    initialState,
    reducers: {
        setMasideList: (state, action) => {
            state.masjidList = action.payload;
        }
    }
})

export const masjidStateRedux = (state) => state.masjid;


export const { setMasideList } = masjidSlice.actions;

export default masjidSlice.reducer;