import React from "react";

import { cilPencil, cilTrash } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardSubtitle,
  CCardTitle,
  CCol,
  CPagination,
  CPaginationItem,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import { MOCK_TRANSACTIONS } from "mocks/transactions";
import moment from "moment";

const Transactions = () => {
  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardBody>
            <div className="d-flex justify-content-between align-items-center">
              <CCardTitle>Transactions</CCardTitle>
              <CPagination>
                <CPaginationItem aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </CPaginationItem>
                <CPaginationItem>1</CPaginationItem>
                <CPaginationItem>2</CPaginationItem>
                <CPaginationItem>3</CPaginationItem>
                <CPaginationItem aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </CPaginationItem>
              </CPagination>
            </div>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Customer</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    Amount Payable
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Amount Paid</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Balance</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {MOCK_TRANSACTIONS.map(
                  ({
                    ref_code,
                    customer_name,
                    amount_payable,
                    amount_paid,
                    balance,
                    date_created,
                    status,
                  }) => (
                    <CTableRow key={ref_code}>
                      <CTableHeaderCell scope="row">
                        {ref_code}
                      </CTableHeaderCell>
                      <CTableDataCell>{customer_name}</CTableDataCell>
                      <CTableDataCell>{amount_payable}</CTableDataCell>
                      <CTableDataCell>{amount_paid}</CTableDataCell>
                      <CTableDataCell>{balance}</CTableDataCell>
                      <CTableDataCell>
                        {moment(date_created).format("MMMM Do YYYY")}
                      </CTableDataCell>
                      <CTableDataCell>{status}</CTableDataCell>
                      <CTableDataCell>
                        <CButtonGroup role="group" aria-label="Basic example">
                          <CButton color="info">
                            <CIcon className="text-white" icon={cilPencil} />
                          </CButton>
                          <CButton color="danger">
                            <CIcon className="text-white" icon={cilTrash} />
                          </CButton>
                        </CButtonGroup>
                      </CTableDataCell>
                    </CTableRow>
                  )
                )}
              </CTableBody>
            </CTable>
            <div className="d-flex justify-content-between align-items-center">
              <CCardSubtitle>100-155/429 Total Items</CCardSubtitle>
              <CPagination className="mb-0">
                <CPaginationItem aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </CPaginationItem>
                <CPaginationItem>1</CPaginationItem>
                <CPaginationItem>2</CPaginationItem>
                <CPaginationItem>3</CPaginationItem>
                <CPaginationItem aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </CPaginationItem>
              </CPagination>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Transactions;
