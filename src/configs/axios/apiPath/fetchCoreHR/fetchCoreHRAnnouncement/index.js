import { API } from "../../../API";

// --- List Announcement ---
export const getListAnnouncement = (params) =>
  API.get('announcements', { params: params });

// --- Post Announcement ---
export const postAnnouncement = (data) => 
  API.post('announcements', data);
  
  // --- Get Announcement By Id ---
  export const getAnnouncementById = (id) => 
  API.get(`announcements/${id}`);
  
  // --- Update Announcement By Id ---
  export const updateAnnouncementById = (data, id) => 
  API.put(`announcements/${id}`, data);
  

  // --- Delete Announcement By Id ---
export const deleteAnnouncementById = (id) => 
API.delete(`announcements/${id}`);
    