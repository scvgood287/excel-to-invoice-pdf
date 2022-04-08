import React, { memo } from 'react';

import kshopinaExpressLogo from 'resources/images/kshopinaExpressLogo.jpeg';
import {
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
} from 'styles';

const KuwaitInvoiceForm = ({ lwb, orderNumber, pc, pcs, barcodeUrl, name, block, street, house, city, phone, productDescription, id }) => {

  return (
    <KuwaitInvoiceStyle id={id}>
      <OrderInformations>
        <Cell
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Logo>
            <Cell
              alignItems="center"
              justifyContent="center"
            >
              <img src={kshopinaExpressLogo} alt={"kshopinaExpressLogo"}/>
            </Cell>
          </Logo>
          <OrderNumbers>
            <Column
              flex="11"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              style={{ borderRight: '1px solid' }}
            >
              <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: "center",
                justifyContent: "center",
                borderBottom: '1px solid',
              }}>
                <Cell
                  alignItems="center"
                  justifyContent="center"
                  style={{ fontWeight: 'bold' }}
                >Tracking No.</Cell>
              </div>
              <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: "center",
                justifyContent: "center"
              }}>
                <Cell
                  alignItems="center"
                  justifyContent="center"
                  style={{ fontSize: "90%" }}
                >{lwb}</Cell>
              </div>
            </Column>
            <Column
              flex="9"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: "center",
                justifyContent: "center",
                borderBottom: '1px solid',
              }}>
                <Cell
                  alignItems="center"
                  justifyContent="center"
                  style={{ fontWeight: 'bold' }}
                >Order No.</Cell>
              </div>
              <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: "center",
                justifyContent: "center"
              }}>
                <Cell
                  alignItems="center"
                  justifyContent="center"
                  style={{ fontSize: "90%" }}
                >{orderNumber}</Cell>
              </div>
            </Column>
          </OrderNumbers>
          <Pcs>
            <Cell
              alignItems="center"
              justifyContent="center"
              style={{ fontSize: "160%" }}
            >{`${pc} of ${pcs}`}</Cell>
          </Pcs>
          <AwbBarcode>
            <Cell
              alignItems="center"
              justifyContent="center"
            >
              <img src={barcodeUrl} alt={lwb}/>
            </Cell>
          </AwbBarcode>
        </Cell>
      </OrderInformations>
      <ShippingInformations>
        <ShippingInformation flex="1.5">
          <Column
            flex="9"
            alignItems="center"
            justifyContent="center"
            style={{ borderRight: '1px solid' }}
          >
            <Cell
              alignItems="center"
              justifyContent="center"
            >
              <h4 style={{ textAlign: "center" }}>Product<br/>Description</h4>
            </Cell>
          </Column>
          <Column
            flex="28"
            alignItems="center"
            justifyContent="center"
          >
            <Cell
              alignItems="center"
              justifyContent="center"
            >
              <p style={{ textAlign: "center" }}>{productDescription}</p>
            </Cell>
          </Column>
        </ShippingInformation>
        <ShippingInformation flex="4">
          <Column
            flex="9"
            alignItems="center"
            justifyContent="center"
            style={{ borderRight: '1px solid' }}
          >
            <Cell
              alignItems="center"
              justifyContent="center"
            >
              <h2 style={{ textAlign: "center" }}>Ship<br/>From:</h2>
            </Cell>
          </Column>
          <Column
            flex="28"
            alignItems="center"
            justifyContent="center"
          >
            <Cell flexDirection="column">
              <Row flex="1">
                <Column
                  flex="1"
                  alignItems="center"
                >Name</Column>
                <Column
                  flex="2"
                  alignItems="center"
                  style={{ fontSize: "90%" }}
                >KSHOPINA KOREA</Column>
              </Row>
              <Row flex="1.25">
                <Column
                  flex="1"
                  alignItems="center"
                >Address</Column>
                <Column
                  flex="2"
                  alignItems="center"
                  style={{ fontSize: "90%" }}
                >Mapo-daero 34, 9F Seoul, South Korea</Column>
              </Row>
              <Row flex="1">
                <Column
                  flex="1"
                  alignItems="center"
                >Phone</Column>
                <Column
                  flex="2"
                  alignItems="center"
                  style={{ fontSize: "90%" }}
                >821063094613</Column>
              </Row>
              <Row flex="1">
                <Column
                  flex="1"
                  alignItems="center"
                >Email</Column>
                <Column
                  flex="2"
                  alignItems="center"
                  style={{ fontSize: "90%" }}
                >sales@kshopina.com</Column>
              </Row>
            </Cell>
          </Column>
        </ShippingInformation>
        <ShippingInformation flex="4.5">
          <Column
            flex="9"
            alignItems="center"
            justifyContent="center"
            style={{ borderRight: '1px solid' }}
          >
            <Cell
              alignItems="center"
              justifyContent="center"
            >
            <h2 style={{ textAlign: "center" }}>Ship<br/>To:</h2>
            </Cell>
          </Column>
          <Column
            flex="28"
            alignItems="center"
            justifyContent="center"
          >
            <Cell flexDirection="column">
              <Row flex="1">
                <Column
                  flex="1"
                  alignItems="center"
                >Name</Column>
                <Column
                  flex="2"
                  alignItems="center"
                  style={{ fontSize: "90%" }}
                >{name}</Column>
              </Row>
              <Row flex="1">
                <Column
                  flex="1"
                  alignItems="center"
                >Block</Column>
                <Column
                  flex="2"
                  alignItems="center"
                  style={{ fontSize: "90%" }}
                >{block}</Column>
              </Row>
              <Row flex="1">
                <Column
                  flex="1"
                  alignItems="center"
                >Street</Column>
                <Column
                  flex="2"
                  alignItems="center"
                  style={{ fontSize: "90%" }}
                >{street}</Column>
              </Row>
              <Row flex="1">
                <Column
                  flex="1"
                  alignItems="center"
                >House</Column>
                <Column
                  flex="2"
                  alignItems="center"
                  style={{ fontSize: "90%" }}
                >{house}</Column>
              </Row>
              <Row flex="1">
                <Column
                  flex="1"
                  alignItems="center"
                >City</Column>
                <Column
                  flex="2"
                  alignItems="center"
                  style={{ fontSize: "90%" }}
                >{city}</Column>
              </Row>
              <Row flex="1">
                <Column
                  flex="1"
                  alignItems="center"
                >Phone</Column>
                <Column
                  flex="2"
                  alignItems="center"
                  style={{ fontSize: "90%" }}
                >{phone}</Column>
              </Row>
            </Cell>
          </Column>
        </ShippingInformation>
      </ShippingInformations>
    </KuwaitInvoiceStyle>
  );
};

export default memo(KuwaitInvoiceForm);