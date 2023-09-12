///<reference types = "cypress"/>

describe('Cypress Demo', () => {
  it('Verify Login Page', () => {
  cy.visit("https://xendit-dashboard-ui-live.ap-southeast-1.stg.tidnex.dev/login");
  cy.get('input[name="email"]').type('xenditsmoketest+reportsid@gmail.com')
  cy.get('input[name="password"]').type('rudy1234')
  cy.get('button[type="submit"]').click();
  cy.wait(10000);
  cy.get('.welcome-message').should('have.text','Reports QA, welcome to your  dashboard!');
  })
  })

  describe('API Test',() =>{
    it('Verify API test',()=>{
      cy.request({method: 'POST', url: 'https://reqres.in/api/users', body: {
      "name": "Tom",
      "job": "Team lead"
     }}).then((response) =>{
     //Asserting the status code to be 201 for successful execution
    expect(response.status).to.eq(201)
    expect(response.body.name).to.eq("Bingo")

})

    })
  })