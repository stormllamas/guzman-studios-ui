import { Transaction } from "types/customHooks/transactions/useTransactionData";

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    ref_code: "1",
    customer_name: "John Doe",
    amount_payable: 5000,
    amount_paid: 5000,
    balance: 1000,
    date_created: new Date("2023/12/12"),
    status: "partial",
  },
  {
    ref_code: "1",
    customer_name: "Jane Doe",
    amount_payable: 3000,
    amount_paid: 1500,
    balance: 1500,
    date_created: new Date("2023/12/12"),
    status: "partial",
  },
  {
    ref_code: "1",
    customer_name: "John Doe",
    amount_payable: 2000,
    amount_paid: 1000,
    balance: 1000,
    date_created: new Date("2023/12/12"),
    status: "partial",
  },
];
