import React, { memo } from 'react';
import { useAtom } from 'jotai';
import { read, utils } from 'xlsx';
import JsBarcode from 'jsbarcode';
import uuid from 'react-uuid';

import {
  invoicesAtom,
  invoiceIdsAtom,
  isExcelUploadedAtom,
  errorMessageAtom,
} from 'hooks/states';
import { KuwaitInvoiceForm } from 'components/invoiceForms';
import { CreatePDFButton } from 'components';
import {
  TARGET_SHEET_NAMES,
  LWB,
  ORDER_NUMBER,
  PCS,
  NAME,
  BLOCK,
  STREET,
  HOUSE,
  CITY,
  PHONE,
  PRODUCT_DESCRIPTION,
} from 'Dictionary';

const { sheet_to_json } = utils;

const App = () => {
  const [invoices, setInvoices] = useAtom(invoicesAtom);
  const [, setInvoiceIds] = useAtom(invoiceIdsAtom);
  const [, setIsExcelUploaded] = useAtom(isExcelUploadedAtom);
  const [errorMessage, setErrorMessage] = useAtom(errorMessageAtom);

  const readExcel = (event) => {
    try {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.readAsBinaryString(file);
  
      reader.onload = (e) => {
        const fileData = e.target.result;
        const workbook = read(fileData, { type: "binary" });
        const targetSheet = workbook.Sheets[TARGET_SHEET_NAMES.KUWAIT];
        const columns = sheet_to_json(targetSheet);
  
        let tempInvoices = [];
        let tempInvoiceIds = [];
  
        columns.forEach(column => {
          const lwb = column[LWB];
          const orderNumber = column[ORDER_NUMBER];
          const pcs = column[PCS];
          const name = column[NAME];
          const block = column[BLOCK];
          const street = column[STREET];
          const house = column[HOUSE];
          const city = column[CITY];
          const phone = column[PHONE];
          const productDescription = column[PRODUCT_DESCRIPTION];
  
          const barcodeCanvas = document.createElement('canvas');
          JsBarcode(barcodeCanvas, lwb, { format: "CODE128" });
          const barcodeUrl = barcodeCanvas.toDataURL('image/png');
  
          for (let pc = 1; pc <= pcs; pc++) {
            const id = `${lwb}_${orderNumber}_${pc}_${pcs}_${name}_${block}_${street}_${house}_${city}_${phone}_${productDescription}`;

            const invoice = (
              <KuwaitInvoiceForm
                key={uuid()}
                lwb={lwb}
                orderNumber={orderNumber}
                pc={pc}
                pcs={pcs}
                barcodeUrl={barcodeUrl}
                name={name}
                block={block}
                street={street}
                house={house}
                city={city}
                phone={phone}
                productDescription={productDescription}
                id={id}
              />
            );
  
            tempInvoices.push(invoice);
            tempInvoiceIds.push(id);
          };
        });
  
        setInvoices(tempInvoices);
        setInvoiceIds(tempInvoiceIds);
        setErrorMessage();
        setIsExcelUploaded(true);
      };
    } catch (err) { console.error(err); };
  };

  const handleChange = (e) => {
    console.log(e.target.id);
    console.log(e.target.value);
  }

  return (
    <>
      <input type="file" onChange={readExcel} />
      <CreatePDFButton />
      <div>{errorMessage}</div>
      {invoices}
      <input onChange={(e) => handleChange(e)}></input>
    </>
  );
}

export default memo(App);