import axios from "axios";
import baseURL from "../../baseURL";

export const getEmployees = (params) =>
  axios.get(`${baseURL}/api/employees/`, params);

export const getEmployee = (id, params) =>
  axios.get(`${baseURL}/api/employees/${id}/`, params);

export const postEmployee = (params) =>
  axios.post(`${baseURL}/api/employees/`, params);

export const putEmployee = (id, params) =>
  axios.put(`${baseURL}/api/employees/${id}/`, params);

export const deleteEmployee = (id) =>
  axios.delete(`${baseURL}/api/employees/${id}/`);
