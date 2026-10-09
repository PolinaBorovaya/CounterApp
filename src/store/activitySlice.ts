import { createSlice } from '@reduxjs/toolkit';

export interface Post{
    userId: number,
    id: number,
    title: string,
    body: string,
}

interface ActivityState{
    posts: Post[],
    loading: boolean,
    error: string | null,
}

const initialState : ActivityState = {
    posts: [],
    loading: false,
    error: null,
};

const activitySlice = createSlice({
    name: 'activity',
    initialState,
    reducers: {
        fetchTasksRequest: (state) => {
            state.loading = true;
            state.error = null;
        },

        fetchTasksSuccess: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },

        fetchTasksFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchTasksRequest, fetchTasksSuccess, fetchTasksFailure } = activitySlice.actions;
export default activitySlice.reducer;