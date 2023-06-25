import { API } from '../../../API';
// --- List Attendance ---
export const getListAttendance = (params) =>
  API.get('timesheet/attendance', { params: params });

// --- Post Attendance ---
export const postAttendance = (data) => API.post('timesheet/attendance', data);

// --- Get Attendance By Id ---
export const getAttendanceById = (id) => API.get(`timesheet/attendance/${id}`);

// --- Update Attendance By Id ---
export const updateAttendanceById = (data, id) =>
  API.put(`timesheet/attendance/${id}`, data);

// --- Delete Attendance By Id ---
export const deleteAttendanceById = (id) =>
  API.delete(`timesheet/attendance/${id}`);
