import styled from 'styled-components';

const { div } = styled;

const KuwaitInvoiceStyle = div`
  display: flex;
  width: 400px;
  height: 600px;
  flex-direction: column;
`;

const OrderInformations = div`
  flex: 12;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid;
  border-bottom: 1px solid;
`;

const Logo = div`
  flex: 16;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OrderNumbers = div`
  flex: 9;
  width: 85%;
  display: flex;
  border: 1px solid;
`;

const Pcs = div`
  flex: 9;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AwbBarcode = div`
  flex: 20;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShippingInformations = div`
  flex: 13;
  display: flex;
  flex-direction: column;
  border-top: 1px solid;
  border-right: 3px solid;
  border-bottom: 2px solid;
  border-left: 3px solid;
`;

const ShippingInformation = div`
  flex: ${({ flex }) => flex};
  display: flex;
  border-bottom: 1px solid;
`;

const Column = div`
  display: flex;
  ${({ flex, flexDirection = "row", alignItems = "stretch", justifyContent = "flex-start", border }) => `
    flex: ${flex};
    flex-direction: ${flexDirection};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
  `}
`;

const Row = div`
  flex: ${({ flex }) => flex};
  display: flex;
`;

const Cell = div`
  width: 90%;
  height: 90%;
  display: flex;
  ${({ flexDirection = "row", alignItems = "stretch", justifyContent = "flex-start" }) => `
    flex-direction: ${flexDirection};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
  `}
`;

export {
  KuwaitInvoiceStyle,
  OrderInformations,
  Logo,
  OrderNumbers,
  Pcs,
  AwbBarcode,
  ShippingInformations,
  ShippingInformation,
  Column,
  Row,
  Cell
};