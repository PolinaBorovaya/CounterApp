import Activity from '../views/Activity';
import { useAppDispatch, useAppSelector } from "../store";
import { fetchTasksRequest } from "../store/activitySlice";
import { useCallback } from 'react';

const ActivityContainer = () => {
    const dispatch = useAppDispatch();

    const { posts, loading, error } = useAppSelector((state) => ({
        posts: state.activity.posts,
        loading: state.activity.loading,
        error: state.activity.error,
    }));

    const handleFetch = useCallback(() => {
        dispatch(fetchTasksRequest());
    }, [dispatch]);

    return <Activity
        posts={posts}
        isDataLoading={loading}
        error={error}
        onFetch={handleFetch}
    />
}

export default ActivityContainer;