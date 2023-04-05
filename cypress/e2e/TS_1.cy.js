describe('verify Student Registration form with valid data', () => {
  it.only('passes', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.get('header > a > img').should('be.exist');
    cy.get('#firstName').type('test Name');
    cy.get('#lastName').type('test LastName');
    cy.get('#userEmail').type('test@test.com');
    cy.get('#gender-radio-1').check({force: true})
    cy.get('#userNumber').type('099000000');  
    cy.get('#dateOfBirthInput').should('have.value','05 Apr 2023');
    cy.get('#class="subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3"')
    .type('testSubject');
    cy.get('#custom-control-label').type('Sport');
    cy.get('#custom-control-label').type('Reading');
    cy.get('#custom-control-label').type('Music');
    cy.get('#currentAddress').type('testAddress');
    cy.get('#css-1hwfws3').type('NCR');
    cy.get('#col-md-4 col-sm-12').type('Delhi');
    cy.get('#submit').click();
})

// it('verify St.Reg. Form with blank data', () => {
// cy.get('#firstName').type('');
// cy.get('#lastName').type('');
// cy.get('#userEmail').type('');
// cy.get('#gender-radio-1').type('');
// cy.get('#userNumber').type('');
// cy.get('#dateOfBirthInput').type('');
// cy.get('#class="subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3"')
// .type('');
// cy.get('#custom-control-label').type('');
// cy.get('#custom-control-label').type('');
// cy.get('#custom-control-label').type('');
// cy.get('#currentAddress').type('');
// cy.get('#css-1hwfws3').type('');
// cy.get('#col-md-4 col-sm-12').type('');
// cy.get('#submit').click();
// })
// it('verify St. Reg. form with not valid data', () => {
//   cy.visit('https://demoqa.com/automation-practice-form');
//   cy.get('header > a > img').should('be.exist');
//   cy.get('#firstName').type('test Name');
//   cy.get('#lastName').type('test LastName');
//   cy.get('#userEmail').type('test@test.com');
//   cy.get('#gender-radio-1').type('Male');
//   cy.get('#userNumber').type('099000000');
//   cy.get('#dateOfBirthInput').type('o1 Apr 2000');
//   cy.get('#class="subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3"')
//   .type('testSubject');
//   cy.get('#custom-control-label').type('Sport');
//   cy.get('#custom-control-label').type('Reading');
//   cy.get('#custom-control-label').type('Music');
//   cy.get('#currentAddress').type('testAddress');
//   cy.get('#css-1hwfws3').type('NCR');
//   cy.get('#col-md-4 col-sm-12').type('Delhi');
//   cy.get('#submit').click();
// })
})