import { v4 as uuidv4 } from 'uuid';

const generateCertificateId = () => {
  return 'CERT-' + uuidv4().split('-')[0].toUpperCase();
};

export default generateCertificateId;
