import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchTasksSuccess, fetchTasksFailure, fetchTasksRequest, Post } from '../activitySlice';

const fetchPostsApi = async (): Promise<Post[]> => {
    const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    return response.data;
};

function* fetchTasksWorker(): Generator {
    try {
        const posts = yield call(fetchPostsApi);
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