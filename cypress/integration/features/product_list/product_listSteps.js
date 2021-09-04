import {Given, And, Then, When} from "cypress-cucumber-preprocessor/steps"

Given("user is in homepage", () => {
    cy.visit("/");  
})

When("user open {string} category", (string) => {
    cy.get("a[title='"+string+"']").click();
})

Then("user is in {string} category page", (string) => {
    cy.title().should("eq", string + " - My Store");
})