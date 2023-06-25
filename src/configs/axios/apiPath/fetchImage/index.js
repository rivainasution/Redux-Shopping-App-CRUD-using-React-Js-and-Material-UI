import axios from "axios";

const URL = process.env.REACT_APP_API_BASE_URL

// --- Fetch Image ---
export const postImage = (formData, token) => {
    return axios.post(
        `${URL}employee-awards/image`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
    );
}

// --- Get Image Document ---
export const postImageDocument = (data, token) => {
  return axios.post(
      `${URL}documents`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }
  );
}

// --- Post Image Document ---
export const getImageDocument = (images, token) => {
  return axios.get(`${URL}documents/${images}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    responseType: 'blob',
  });
}