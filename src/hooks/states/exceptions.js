import { atom } from "jotai";

const isExcelUploadedAtom = atom(false);
const errorMessageAtom = atom();

export {
  isExcelUploadedAtom,
  errorMessageAtom
};