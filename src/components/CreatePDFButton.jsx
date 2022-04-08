import React, { memo } from 'react';
import { useAtom } from 'jotai';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

import {
  invoiceIdsAtom,
  isExcelUploadedAtom,
  errorMessageAtom,
} from 'hooks/states';
import {
  KUWAIT_INVOICE_ORIENTATION,
  KUWAIT_INVOICE_UNIT,
  KUWAIT_INVOICE_WIDTH,
  KUWAIT_INVOICE_HEIGHT
} from 'Dictionary';

const CreatePDFButton = () => {
  const [invoiceIds] = useAtom(invoiceIdsAtom);
  const [isExcelUploaded] = useAtom(isExcelUploadedAtom);
  const [, setErrorMessage] = useAtom(errorMessageAtom);

  const createPDF = async () => {
    try {
      if (!isExcelUploaded) {
        const error = '엑셀을 먼저 업로드해주세요.';
        setErrorMessage(error);
        throw new Error(error);
      };

      let invoicePngs = [];
      await Promise.all(invoiceIds.map(async (invoiceId, i) => {
        const invoiceHtml = document.getElementById(invoiceId);
        const invoiceCanvas = await html2canvas(invoiceHtml);
        const invoicePng = invoiceCanvas.toDataURL('image/png');

        invoicePngs[i] = invoicePng;
      }));
      
      console.log(invoicePngs);

      const doc = new jsPDF(KUWAIT_INVOICE_ORIENTATION, KUWAIT_INVOICE_UNIT, [KUWAIT_INVOICE_WIDTH, KUWAIT_INVOICE_HEIGHT], true);
      invoicePngs.forEach((invoicePng, i) => {
        doc.addImage(invoicePng, "PNG", 0, 0, KUWAIT_INVOICE_WIDTH, KUWAIT_INVOICE_HEIGHT, '', 'FAST');

        if (i < invoicePngs.length - 1) { doc.addPage([KUWAIT_INVOICE_WIDTH, KUWAIT_INVOICE_HEIGHT], "p"); };
      });

      doc.save("KuwaitInvoice.pdf");
      setErrorMessage();
    } catch (err) { console.error(err); };
  };

  return (
    <button onClick={() => createPDF()}>PDF 다운로드</button>
  );
};

export default memo(CreatePDFButton);


