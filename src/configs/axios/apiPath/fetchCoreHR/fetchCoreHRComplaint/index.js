import { API } from "../../../API";

// --- List Complaint ---
export const getListComplaint = (params) =>
  API.get('complaints', { params: params });


// --- Post Complaints ---
export const postComplaints = (data) => 
  API.post('complaints', data);
  
  // --- Get Complaints By Id ---
  export const getComplaintsById = (params, id) => 
  API.get(`complaints/${id}`, {params: params});
  
  // --- Update Complaints By Id ---
  export const updateComplaintsById = (data, id) => 
  API.put(`complaints/${id}`, data);

// --- Delete Complaint By Id ---
export const deleteComplaintsById = (id) => 
API.delete(`complaints/${id}`);