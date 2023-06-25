import CryptoJS from 'crypto-js';
import { DecryptedAES } from '../../../utils/crypto';

const DataLogin = () => {
  const data = localStorage.getItem('dataLogin');

  let bytes = data && DecryptedAES(data);
  let decryptedData = bytes && JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  let token = decryptedData && decryptedData.data.access_token;
  let companies = decryptedData && decryptedData.data.companies;
  let countryCode = decryptedData && decryptedData.data.contry_code;
  let expiresAt = decryptedData && decryptedData.data.expires_at;
  let namaLengkap = decryptedData && decryptedData.data.nama_lengkap;
  let permission = decryptedData && decryptedData.data.permission;
  let role = decryptedData && decryptedData.data.role;

  return {
    token,
    companies,
    countryCode,
    expiresAt,
    namaLengkap,
    permission,
    role,
  };
};

export default DataLogin;
