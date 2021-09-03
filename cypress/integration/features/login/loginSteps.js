import {Given, And, Then, When} from "cypress-cucumber-preprocessor/steps"

Given("user is in login page", () => {
    cy.visit("/");
    cy.get(".login").click();
})

When("user login using correct email and password", () => {
    cy.get("#email").type("suci.test@mailinator.com");
    cy.get("#passwd").type("testing123");
    cy.get("#SubmitLogin").click();
    
})

Then("user successfully logged in", () => {
    cy.get(".logout").should("be.visible");
})