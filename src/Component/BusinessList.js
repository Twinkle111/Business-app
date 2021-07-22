import React, { useEffect } from "react";
// import { connect } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import {
  BUSINESS_DATA_KEYS,
  BUSINESS_DETAILS_ROUTE,
  BUSINESS_HEADERS,
} from "../Constant";
import TableWidget from "../CustomWidgets/TableWidget";

export const BusinessList = (props) => {
  useEffect(() => {
    fetch("https://smoothcommerce.tech/api.json")
      .then((response) => response.json())
      .then((response) => {
        props.setBusinessList(response);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const history = useHistory();

  const Container = styled.div`
    margin: 50px;
  `;

  const Heading = styled.h2`
    color: black;
  `;

  return (
    <Container>
      <Heading>Company List</Heading>
      <TableWidget
        tableHeaders={BUSINESS_HEADERS}
        tableData={props.businessList}
        tableDataKeys={BUSINESS_DATA_KEYS}
        handleRowSelected={(businessDetails) => {
          props.setSelectedBusiness(businessDetails);
          history.push(BUSINESS_DETAILS_ROUTE);
        }}
      />
    </Container>
  );
};

export default BusinessList;
