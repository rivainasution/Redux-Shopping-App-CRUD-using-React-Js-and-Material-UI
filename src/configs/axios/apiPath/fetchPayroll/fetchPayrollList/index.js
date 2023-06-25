import { API } from '../../../API';

// --- List PayrollPeriods ---
export const getListPayrollPeriods = (params) =>
  API.get('payroll-periods', { params: params });

// --- Post PayrollPeriods ---
export const postPayrollPeriods = (data) => API.post('payroll-periods', data);

// --- Get PayrollPeriods By Id ---
export const getPayrollPeriodsById = (id) => API.get(`payroll-periods/${id}`);

// --- Update PayrollPeriods By Id ---
export const updatePayrollPeriodsById = (data, id) =>
  API.put(`payroll-periods/${id}`, data);

// --- Delete PayrollPeriods By Id ---
export const deletePayrollPeriodsById = (id) =>
  API.delete(`payroll-periods/${id}`);

// --- List Employee Payslip ---
export const getListEmployeePayslip = (params) =>
  API.get('employee-payslips', { params: params });

// --- Generate ---
export const patchGenerate = (params, id) =>
  API.patch(`employee-payslips/${id}/generate`, { params: params });

// --- Generate Pay ---
export const patchGeneratePay = (params, id) =>
  API.patch(`employee-payslips/${id}/pay`, { params: params });

// --- Generate and Paid ---
export const patchGeneratePaid = (params, id) =>
  API.patch(`employee-payslips/${id}/generate-and-pay`, { params: params });

// --- List Employee Payslip By Id ---
export const getListEmployeePayslipById = (id) =>
  API.get(`employee-payslips/${id}`);

// --- select payroll periods ---
export const getSelectPayrollPeriods = (id) =>
  API.get(`employees/${id}/payslips?include=payrollPeriod`);

// --- get Payroll History ---
export const getPayrollHistory = (id, params) =>
  API.get(`employee-payslips-histories/${id}`, { params: [params] });

// --- get Payroll Hisotory Detail ---
export const getPayrollHistoryDetail = (id) =>
  API.get(`employee-payslips-histories/${id}/detail`);

// --- get Salary Type ---
export const getSalaryType = (params) =>
  API.get(`salary-types`, { params: params });

export const postAdhoc = (data, id) =>
  API.post(`employee-payslips/${id}/ad-hoc`, data);

export const getAdhoc = (id, idAdhoc) =>
  API.get(`employee-payslips/${id}/ad-hoc/${idAdhoc}`);

export const updateAdhoc = (id, idAdhoc, data) =>
  API.put(`employee-payslips/${id}/ad-hoc/${idAdhoc}`, data);

export const deleteAdhoc = (id, idAdhoc) =>
  API.delete(`employee-payslips/${id}/ad-hoc/${idAdhoc}`);
