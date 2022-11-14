import { delay,takeLatest, put, fork, all } from 'redux-saga/effects';

function* increaseCounterAsync() {
  try {
    // Delay 4 Seconds
    yield delay(4000);
    yield put({
      type: 'INCREASE_COUNTER_ASYNC',
      value: 1,
    });
  }
  catch (error) {
    console.log(error);
  }
};

export function* watchIncreaseCounter() {
  // Take Last Action Only
  yield takeLatest('INCREASE_COUNTER', increaseCounterAsync);
};

// Worker: Decrease Counter
function* decreaseCounter() {
  try {
    // Dispatch Action To Redux Store
    yield put({
      type: 'DECREASE_COUNTER_ASYNC',
      value: 1,
    });
  }
  catch (error) {
    console.log(error);
  }
};

export function* watchDecreaseCounter() {
  // Take Last Action Only
  yield takeLatest('DECREASE_COUNTER', decreaseCounter);
};

export function* rootSaga () {
  yield all([
    fork(watchIncreaseCounter),
    fork(watchDecreaseCounter),
  ]);
};