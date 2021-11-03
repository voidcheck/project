import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";

Given('I visit site', () => {
    cy.visit('http://localhost:4200')
})

Given('I click ctest1', () => {
    cy.get('#email').type("nikhel@gmail.com")
    cy.get('#password').type("nikhelbisht")
    cy.get('.button-report').click()
})

Then('I click ctest2', () => {
    cy.get('mat-select[formControlName=website]').click().get('mat-option').contains('delhi').click()
    cy.get('#Submit').click()
})
And('I got city', () => {
    cy.get('#city').type('dehradun')
    cy.get('#onSubmit').click()
})

Then('Logout app', () => {
    cy.contains('Logout').click()
})