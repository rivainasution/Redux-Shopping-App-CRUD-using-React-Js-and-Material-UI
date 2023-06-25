import { API } from '../../../API';

export const getListEmployees = (params) =>
  API.get('employees', { params: params });

// --- Post Employees ---
export const postEmployees = (data) => API.post('employees', data);

// --- Get Employees By Id ---
export const getEmployeesById = (id, params) =>
  API.get(`employees/${id}`, { params: params });

// --- Update Employees By Id ---
export const updateEmployeesById = (data, id) =>
  API.put(`employees/${id}`, data);

// --- Delete Employees By Id ---
export const deleteEmployeesById = (id) => API.delete(`employees/${id}`);

// --- get member ---
export const getEmployeesMember = (id, params) =>
  API.get(`employees/${id}/member`, { params: params });

// --- get Attendances ---
export const getEmployeesAttendances = (id, params) =>
  API.get(`employees/${id}/attendances`, { params: params });

export const getEmployeesShift = (id, params) =>
  API.get(`employees/${id}/shifts`, { params: params });

export const deleteShiftOneTime = (id) =>
  API.delete(`employee-one-time-shifts/${id}`);

export const addShiftOneTime = (data) =>
  API.post(`employee-one-time-shifts`, data);

export const deleteShiftRecurring = (id) =>
  API.delete(`employee-recurring-shifts/${id}`);

export const addShiftRecurring = (data) =>
  API.post(`employee-recurring-shifts`, data);
