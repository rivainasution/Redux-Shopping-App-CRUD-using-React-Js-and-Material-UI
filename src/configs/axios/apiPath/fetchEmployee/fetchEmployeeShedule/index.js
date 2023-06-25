import { API } from '../../../API';

// --- get Salary Type ---
export const getShift = (params) => API.get(`shifts`, { params: params });

// --- Get Salary Type By id ---
export const getShiftById = (id) => API.get(`shifts/${id}`);

// --- Post Shift ---
export const postShift = (data, id) => API.post(`shifts`, data);

// --- Update Shift ---
export const updateShift = (id, data) => API.put(`shifts/${id}`, data);

// --- Delete Shift ---
export const deleteShift = (id) => API.delete(`shifts/${id}`);
