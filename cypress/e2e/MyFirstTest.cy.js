
describe("Myfirstsuite" , ()=>
{
    it("Title check-Positive", ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
    }

    )
}

)