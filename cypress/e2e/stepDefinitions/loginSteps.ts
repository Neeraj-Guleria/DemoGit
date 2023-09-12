import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../pageObjects/loginPage';

Given('I am on login page',()=>{

  cy.visit("https://xendit-dashboard-ui-live.ap-southeast-1.stg.tidnex.dev/login");

});

When('I submit the login with email and password',()=>{
  cy.get('input[name="email"]').type('xenditsmoketest+reportsid@gmail.com')
  cy.get('input[name="password"]').type('rudy1234')
  cy.get('button[type="submit"]').click();
  //LoginPage.loginDetails();

})

Then('I should see the homepage',()=>{
  cy.wait(10000);
  cy.get('.welcome-message').should('have.text','Reports QA, welcome to your  dashboard!');
})

