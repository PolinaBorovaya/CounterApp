import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchTasksSuccess, fetchTasksFailure, fetchTasksRequest, ActivityPost } from '../activitySlice';

const URL_ACTIVITY = 'https://jsonplaceholder.typicode.com/posts';

const getPostsByActivity = async (): Promise<ActivityPost[]> => {
    const response = await axios.get<ActivityPost[]>(URL_ACTIVITY);
    return response.data;
};

function* fetchTasksWorker(): Generator {
    try {
        const posts = yield call(getPostsByActivity);
        yield put(fetchTasksSuccess(posts));
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Неизвестная ошибка';
        yield put(fetchTasksFailure(message));
    }
}

export function* activitySaga(): Generator {
    yield takeLatest(fetchTasksRequest.type, fetchTasksWorker);
}

export default activitySaga;