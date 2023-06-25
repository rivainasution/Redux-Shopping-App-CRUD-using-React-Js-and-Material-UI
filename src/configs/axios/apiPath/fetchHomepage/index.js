import { API } from '../../API';

export const getListAttendee = (params) =>
  API.get('attendances/employee', { params: params });
