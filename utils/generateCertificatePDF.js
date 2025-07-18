import PDFDocument from 'pdfkit';
import fs from 'fs';

export const generateCertificatePDF = (student, filePath) => {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(filePath));

  doc.fontSize(24).text('Nursing Training Completion Certificate', { align: 'center' });
  doc.moveDown();
  doc.fontSize(16).text(`This is to certify that ${student.name} has successfully completed the training program.`);
  doc.moveDown();
  doc.text(`College: ${student.college.name}`);
  doc.text(`Certificate ID: ${student.certificate._id}`);
  doc.text(`Date: ${new Date().toLocaleDateString()}`);

  doc.end();
};
