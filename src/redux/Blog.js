import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    blogMainData: null,
}

const blogRedux = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        setBlog: (state, action) => {
            state.blogMainData = action.payload;
        }
    }
});

export const blogStateRedux = (state) => state.blog;

export const
    {
        setBlog
    } = blogRedux.actions;

export default blogRedux.reducer