import { combineReducers } from "redux";

import snackbarReducer from "./snackbar";
import employeesReducer from "../modules/Employees/employeesSlice";
const createRootReducer = () =>
  combineReducers({
    snackbar: snackbarReducer,
    employees: employeesReducer,
  });

export default createRootReducer;
