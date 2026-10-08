import Activity from '../views/Activity';
import { useAppDispatch, useAppSelector } from "../store";
import { fetchTasksRequest } from "../store/activitySlice";

const ActivityContainer = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector((state) => state.activity.posts);
    const loading = useAppSelector((state) => state.activity.loading);
    const error = useAppSelector((state) => state.activity.error);

    const handleFetch = () => {
        dispatch(fetchTasksRequest());
    };

    return <Activity
        posts={posts}
        loading={loading}
        error={error}
        onFetch={handleFetch}
    />
}

export default ActivityContainer;