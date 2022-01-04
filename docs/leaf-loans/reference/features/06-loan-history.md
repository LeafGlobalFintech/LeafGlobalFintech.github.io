# Loan History

This component has a repository which defines two methods: `getLoans` and `getActiveLoan`.

In the current implementation, the active loan is the first loan from the result gotten from `getLoans`.

The only event being analyzed here is Inactive Loan History Card Tapped (`inactive_loan_history_card_tapped`) which is registered when any card that can navigate to the loan detail page is tapped.
