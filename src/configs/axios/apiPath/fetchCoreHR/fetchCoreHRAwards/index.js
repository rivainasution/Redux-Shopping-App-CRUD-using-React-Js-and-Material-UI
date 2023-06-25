import { API } from "../../../API";

// --- List Awards ---
export const getListAwards = (params) =>
  API.get('employee-awards', { params: params });

// --- Post Employee ---
export const postAwards = (data) => 
  API.post('employee-awards', data);

// --- Get Employee By Id ---
export const getAwardsById = (id) => 
API.get(`employee-awards/${id}`);

// --- Update Employee By Id ---
export const updateAwardsById = (data, id) => 
API.put(`employee-awards/${id}`, data);

// --- Delete Employee By Id ---
export const deleteAwardsById = (id) => 
API.delete(`employee-awards/${id}`);
  