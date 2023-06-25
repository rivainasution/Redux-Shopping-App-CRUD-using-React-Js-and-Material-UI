import { API } from "../../../API";

export const getListWarning = (params) =>
  API.get('warnings?include=document', { params: params });

// --- Post Warning ---
export const postWarning = (data) => 
API.post('warnings', data);

// --- Get Warning By Id ---
export const getWarningById = (id) => 
API.get(`warnings/${id}`);

// --- Update Warning By Id ---
export const updateWarningById = (data, id) => 
API.put(`warnings/${id}`, data);

// --- Delete Warning By Id ---
export const deleteWarningById = (id) => 
API.delete(`warnings/${id}`);