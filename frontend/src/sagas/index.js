import { all } from "redux-saga/effects";

import { employeesSagas } from "../modules/Employees/sagas/index";

export default function* rootSaga() {
  yield all([...employeesSagas]);
}
