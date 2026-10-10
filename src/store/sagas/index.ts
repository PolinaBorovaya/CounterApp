import { all, fork } from 'redux-saga/effects';
import activitySaga from './activitySaga';

function* rootSaga(): Generator {
    yield all([
        fork(activitySaga),
    ]);
}

export default rootSaga;