describe("Alerts", () => {
  it.skip("Alert with ok", () => {
    cy.visit("https://vinothqaacademy.com/alert-and-popup/");

    cy.get("button[name='alertbox']").click();

    cy.on("window:alert", (t) => {
      expect(t).to.contains("I am an alert box!");
    });
    cy.get("#demotwo").should("have.text", "You clicked on OK!");
  });

  it("Confirm Alert Box", () => {
    cy.visit("https://vinothqaacademy.com/alert-and-popup/");

    cy.get("button[name='confirmalertbox']").click();

    cy.on("window:confirm", (t) => {
      expect(t).to.contains("Confirm pop up");
    });

    cy.on("window:confirm", () => false);
    cy.get("#demo").should("have.text", "You clicked on Cancel!");
  });
});

it.only("Prompt Alert Box", () => {
  cy.visit("https://vinothqaacademy.com/alert-and-popup/");

  cy.window().then((win) => {
    cy.stub(win, 'prompt').callsFake((inputText) => {
      // Clear existing text and type 'yes'
      return "yes";
    });
  });

  cy.get("button[name=promptalertbox1234]").click;
  cy.get("#demoone").should("have.text", "Thanks for Liking Automation");
});
