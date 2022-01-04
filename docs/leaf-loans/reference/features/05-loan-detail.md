# Loan Detail

The loan detail page has no data and domain layers of itself, it instead relies on the methods exposed by `LoanPaymentRepo`.

The loan detail screen takes a loan as an argument and gets the loan payment history using the `getLoanPayments` from `LoanPaymentRepo`.

The events being analyzed in this component include:

- Large Pay Button Tapped (`loan_detail_big_pay_button_tapped`)
- Small Pay Button Tapped (`loan_detail_small_pay_button_tapped`)
