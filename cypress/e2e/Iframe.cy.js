describe("iframe", () => {
  it("single frame", () => {

cy.visit("https://the-internet.herokuapp.com/iframe")

let iframe= cy.get("#mce_0_ifr").its('0.contentDocument.body').should('be.visible').then(cy.wrap)

iframe.clear().type("mari")





  });
});
