import { takeEvery } from "redux-saga/effects";

import {
  SAGA_GET_EMPLOYEES,
  SAGA_GET_EMPLOYEE,
  SAGA_POST_EMPLOYEE,
  SAGA_PUT_EMPLOYEE,
  SAGA_DELETE_EMPLOYEE,
} from "../actions";
import {
  getEmployeesSaga,
  getEmployeeSaga,
  postEmployeeSaga,
  putEmployeeSaga,
  deleteEmployeeSaga,
} from "./sagas";

export const employeesSagas = [
  takeEvery(SAGA_GET_EMPLOYEES, getEmployeesSaga),
  takeEvery(SAGA_GET_EMPLOYEE, getEmployeeSaga),
  takeEvery(SAGA_POST_EMPLOYEE, postEmployeeSaga),
  takeEvery(SAGA_PUT_EMPLOYEE, putEmployeeSaga),
  takeEvery(SAGA_DELETE_EMPLOYEE, deleteEmployeeSaga),
];
