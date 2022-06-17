// https://docs.cypress.io/api/introduction/api.html

describe("Reachable pages", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Greeting!");
  });

  it("visits the about page", () => {
    cy.visit("/dealer");
    cy.contains("div", "The dealer");
  });
});
