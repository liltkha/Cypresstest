class LoginPage {
  visit() {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');
  }

  getUsername(value) {
    return cy.get('.input').first().type('TestUsername');
  }

  getPassword(value) {
    return cy.get(':nth-child(4) > .input').type("TestPassword");;
  }

  submit() {
    const button = cy.get(':nth-child(5) > .button')
    button.click()
  }

  // fillEmail(value) {
  //   const field = cy.get(`[data-testid=SignInEmailField]`);
  //   field.clear();
  //   field.type(value);

  //   return this;
  // }

  // fillPassword(value) {
  //   const field = cy.get(`[data-testid=SignInPasswordField]`);
  //   field.clear();
  //   field.type(value);

  //   return this;
  // }

  // submit() {
  //   const button = cy.get(`[data-testid=SignInSubmitButton]`);
  //   button.click();
  // }

  }

export const loginPage=new LoginPage();