import { createSlice } from "@reduxjs/toolkit";
import { get } from "lodash";

export const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    employees: [],
    employeesLoading: true,
    employee: {},
    employeeLoading: false,
    drawer :false
  },
  reducers: {
    setEmployees: (state, action) => {      
      state.employees = action.payload;
    },
    setEmployeesLoading: (state, action) => {
      state.employeesLoading = !!action.payload;
    },
    setEmployee: (state, action) => {
      state.employee = action.payload;
    },
    setEmployeeLoading: (state, action) => {
      state.employeeLoading = !!action.payload;
    },
    setDrawer: (state, action) => {      
      state.drawer = !!action.payload;
    },
    
  },
});
export const {
  setEmployee,
  setEmployees,
  setEmployeeLoading,
  setEmployeesLoading,
  setDrawer
} = employeesSlice.actions;

export const selectEmployees = (state) => get(state, "employees.employees");
export const selectEmployeesLoading = (state) => get(state, "employees.employeesLoading");
export const selectEmployee = (state) => get(state, "employees.employee");
export const selectEmployeeLoading = (state) => get(state, "employees.employeeLoading");
export const selectDrawer =(state)=>get(state,"employees.drawer")
export default employeesSlice.reducer;
