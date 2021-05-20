import { put, call, select } from "redux-saga/effects";
import { get } from "lodash";
import { v4 as uuid } from "uuid";

import { enqueueSnackbar } from "../../../actions/snackbar";

import {
  setEmployees,
  setEmployeesLoading,
  setEmployee,
  setEmployeeLoading,
} from "../employeesSlice";
import {
  getEmployees,
  getEmployee,
  postEmployee,
  putEmployee,
  deleteEmployee,
} from "../api";
import { getEmployees as getEmployeesAction } from "../actions";

export function* getEmployeesSaga(params) {
  try {
    const { data } = params;

    yield put(setEmployeesLoading(true));
    const { data: result } = yield call(getEmployees, data);
    yield put(setEmployees(result));
    yield put(setEmployeesLoading(false));
  } catch (e) {
    yield put(
      enqueueSnackbar({
        message:
          get(e, "response.data.detail") ||
          get(e, "response.data.non_field_errors.0") ||
          "An error occurred",
        options: {
          key: uuid(),
          variant: "error",
        },
      })
    );
  }
}

export function* getEmployeeSaga(params) {
  try {
    const id = params?.data;
    yield put(setEmployeeLoading(true));
    const { data: result } = yield call(getEmployee, id);
    yield put(setEmployee(result));
    yield put(setEmployeeLoading(false));
  } catch (e) {
    console.error(e);
    yield put(
      enqueueSnackbar({
        message:
          get(e, "response.data.detail") ||
          get(e, "response.data.non_field_errors.0") ||
          "An error occurred",
        options: {
          key: uuid(),
          variant: "error",
        },
      })
    );
  }
}

export function* postEmployeeSaga(params) {
  const {
    data: { values, setSubmitting },
  } = params;

  try {
    setSubmitting(true);
    yield call(postEmployee, values);

    yield put(getEmployeesAction());
    yield put(
      enqueueSnackbar({
        message: "Employee created successfully!",
        options: {
          key: uuid(),
          variant: "success",
        },
      })
    );
  } catch (e) {
    console.error(e);
    yield put(
      enqueueSnackbar({
        message:
          get(e, "response.data.detail") ||
          get(e, "response.data.non_field_errors.0") ||
          "An error occurred",
        options: {
          key: uuid(),
          variant: "error",
        },
      })
    );
  }

  setSubmitting(false);
}

export function* putEmployeeSaga(params) {
  const {
    data: { id, values, setSubmitting },
  } = params;
  try {
    yield call(putEmployee, id, values);
    yield put(getEmployeesAction());
    setSubmitting(true);
    yield put(
      enqueueSnackbar({
        message: "Employee updated successfully!",
        options: {
          key: uuid(),
          variant: "success",
        },
      })
    );
  } catch (e) {
    console.error(e);
    yield put(
      enqueueSnackbar({
        message:
          get(e, "response.data.detail") ||
          get(e, "response.data.non_field_errors.0") ||
          "An error occurred",
        options: {
          key: uuid(),
          variant: "error",
        },
      })
    );
  }
  setSubmitting(false);
}

export function* deleteEmployeeSaga(params) {
  try {
    const { data: id } = params;
    const result = yield call(deleteEmployee, id);
    yield put(getEmployeesAction());
    yield put(
      enqueueSnackbar({
        message: result?.data?.message,
        options: {
          key: uuid(),
          variant: "success",
        },
      })
    );
  } catch (e) {
    console.log(e);
    yield put(
      enqueueSnackbar({
        message:
          get(e, "response.data.detail") ||
          get(e, "response.data.non_field_errors.0") ||
          "An error occurred",
        options: {
          key: uuid(),
          variant: "error",
        },
      })
    );
  }
}
