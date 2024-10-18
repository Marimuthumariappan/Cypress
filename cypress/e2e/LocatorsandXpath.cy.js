
describe("Locators", ()=>{

it('Browserlanuch',()=>{
    cy.visit('https://www.amazon.in/')
    cy.xpath("//input[@type='text']" ).type('samsung s23 ultra 5+g')
    cy.get('#nav-search-submit-button').click()
    cy.xpath('[data-cy="asin-faceout-container"]').should('have.length',19)
})

})