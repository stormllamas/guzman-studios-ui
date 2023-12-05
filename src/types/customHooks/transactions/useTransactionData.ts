export type Transaction = {
  ref_code: string,
  customer_name: string,
  amount_payable: number,
  amount_paid: number,
  balance: number,
  date_created: Date,
  status: string,
}