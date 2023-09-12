const EMAIL_ID = 'input[name="email"]';
const PASSWORD = 'input[name="password"]';
const SUBMIT_BUTTON = 'button[type="submit"]';

class LoginPage {
  static loginDetails(){

  cy.get(EMAIL_ID).type('xenditsmoketest+reportsid@gmail.com')
  cy.get(PASSWORD).type('rudy1234')
  cy.get(SUBMIT_BUTTON).click();

  }
}

export default LoginPage;




