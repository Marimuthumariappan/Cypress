
describe("Assertions",  ()=>
{
    it("Implicit Assertions", ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('include','orangehrmlive.com')
        // cy.url().should('contain', 'orangehrm')
        // cy.url().should('eql', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         
        cy.url().should('include','orangehrmlive.com')
        .and('contain','orangehrm')
        .and('eql','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.get('.orangehrm-login-branding>img').should('be.visible')
         .and('exist')


         cy.xpath('//a').should('have.length',5)   //verfiy link count


         cy.get('.orangehrm-login-branding > img').should('be.visible') //Logo visible
        
})

    it("Explicit Assertions"),()=>{

        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']")
        cy.get("input[placeholder='Username']").should("have.value","Admin")

        let expName ="xyz"

        cy.get("input[placeholder='Username']").then( (x) =>{
            let.Actualname=x.text()
           
            //BDD Style

            expect(expName).to.equal(Actualname)


            //TDD Style

            assert.equal(Actualname,expName)


        })

        
    }
})