import { API } from "../../../API";

// --- List Promotion ---
export const getListPromotion = (params) =>
  API.get('promotions?include=createdBy', { params: params });

// --- Post Promotion ---
export const postPromotion = (data) => API.post('promotions', data);

// --- Get Promotion By Id ---
export const getPromotionById = (id) => API.get(`promotions/${id}`);

// --- Update Promotion By Id ---
export const updatePromotionById = (data, id) =>
  API.put(`promotions/${id}`, data);

// --- Delete Promotion By Id ---
export const deletePromotionById = (id) => API.delete(`promotions/${id}`);

// --- Approve By Id ---
export const patchPromotionById = (data, id) =>
  API.patch(`promotions/${id}/approve`, data);
