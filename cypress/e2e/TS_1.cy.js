 ///<reference types= 'cypress/'>
import { loginPage } from "../pages/SignIn";
import { data } from "../utils/data";
describe("SignIn", () => {
  it("Verify login functionality with valid credentials", () => {
   loginPage.visit();
   loginPage.getUsername(data.username)
   loginPage.getPassword(data.getPassword)
   loginPage.submit();
   cy.url().should('include', '/parabank/login.htm')
  });
});