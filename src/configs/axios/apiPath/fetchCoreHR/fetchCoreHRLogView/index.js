import { API } from "../../../API";

// --- List Log View ---
export const getListLogView = (params) =>
  API.get('log-views', { params: params });

// --- Post Log View ---
export const postLogview = (data) => 
  API.post('log-views', data);
  
  // --- Get Log View By Id ---
  export const getLogviewById = (id) => 
  API.get(`log-views/${id}`);
  
  // --- Update Log View By Id ---
  export const updateLogviewById = (data, id) => 
  API.put(`log-views/${id}`, data);