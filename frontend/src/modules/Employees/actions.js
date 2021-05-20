const prefix = "employees/";

// ACTION TYPES
export const SAGA_GET_EMPLOYEES = `${prefix}SAGA_GET_EMPLOYEES`;
export const SAGA_GET_EMPLOYEE = `${prefix}SAGA_GET_EMPLOYEE`;
export const SAGA_POST_EMPLOYEE = `${prefix}SAGA_POST_EMPLOYEE`;
export const SAGA_PUT_EMPLOYEE = `${prefix}SAGA_PUT_EMPLOYEE`;
export const SAGA_DELETE_EMPLOYEE = `${prefix}SAGA_DELETE_EMPLOYEE`;
// ACTION CREATORS

export const getEmployees = (data) => ({
  type: SAGA_GET_EMPLOYEES,
  data,
});
export const getEmployee = (data) => ({
  type: SAGA_GET_EMPLOYEE,
  data,
});

export const postEmployee = (data) => ({
  type: SAGA_POST_EMPLOYEE,
  data,
});
export const putEmployee = (data) => ({
  type: SAGA_PUT_EMPLOYEE,
  data,
});
export const deleteEmployee = (data) => ({
  type: SAGA_DELETE_EMPLOYEE,
  data,
});
