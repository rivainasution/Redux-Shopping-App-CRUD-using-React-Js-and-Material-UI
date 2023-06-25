import { API } from "../../../API";

// --- List Resign ---
export const getListResign = (params) =>
  API.get('employee-resignations', { params: params });

// --- Post Resign ---
export const postResign = (data) => 
API.post('employee-resignations', data);

// --- Get Resign By Id ---
export const getResignById = (id) => 
API.get(`employee-resignations/${id}`);

// --- Update Resign By Id ---
export const updateResignById = (data, id) => 
API.put(`employee-resignations/${id}`, data);

// --- Delete Resign By Id ---
export const deleteResignById = (id) => 
API.delete(`employee-resignations/${id}`);

// --- Post Approve Resign ---
export const patchResign = (data, id) => 
API.patch(`employee-resignations/${id}/status`, data);

