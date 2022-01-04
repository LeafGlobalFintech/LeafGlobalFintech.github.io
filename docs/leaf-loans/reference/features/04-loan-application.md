# Loan Application

The components here are responsible for the entire flow of the loan application.

The first step is getting the loan types and their information. After that is done, the user gets to see them and decide the details for the loan.

Currently, the UI has 3 different forms which are shown based on the remote config. `FormContentA`, `FormContentB` or `FormContentC` if the remove config value for `form_content_type`.

After the loan details are filled out and the input validation is done, the confirmation dialog is shown with a summary of the selected loan detail. When a user hits proceed, the PIN confirmation sheet is shown. The widget resides on core and all it does is take a PIN code and return the value inputted.

After the PIN confirmation this component uses the `apply` method in the implementation of the `LoanApplicationRepository` to send the details to the API. On success, the user will get a message on the snackbar and get navigated to the home page. If the application failed, a snackbar with a message indicating the failure is shown.

In the loan application component the following events are being logged by the analytics integration:

- Loan Amount Field Interaction (`loan_application_amount_field_used`)
- Add Currency Button Tapped (`add_currency_tapped`)
- Submit Button Tapped (`loan_application_submit_button_tapped`)
- Application Successfully Submitted (`loan_application_submitted`)
- Loan Amount Slider Used (`loan_application_slider_used`)
