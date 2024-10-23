describe("Radiobutton,Checkbox,Dropdown",()=>{


it.skip("Radio Button",()=>{

cy.visit("https://demo.guru99.com/test/radio.html")
cy.get("#vfb-7-1").check().should("be.checked")

cy.get("#vfb-7-2").should("not.be.checked")

cy.get("#vfb-7-3").should("not.be.checked")

})

it.skip("Checkbox",()=>{

    cy.visit("https://demo.guru99.com/test/radio.html")
    cy.get("#vfb-6-0").should("be.visible")

    cy.get("#vfb-6-0").check().should("be.checked") 


})
it.skip("Checkallbox",()=>{

    cy.visit("https://demo.guru99.com/test/radio.html")
    cy.get("input[type='checkbox']").should("be.visible")

    cy.get("input[type='checkbox']").check().should("be.checked") 

    cy.get("input[type='checkbox']").uncheck().should("not.be.checked")
    
    cy.get("input[type='checkbox']").first().check().should("be.checked") 

    cy.get("input[type='checkbox']").last().check().should("be.checked")
    

})

it("Dropdown",()=>{

    cy.visit("https://www.automationtesting.co.uk/dropdown.html#")
  cy.get("#cars").select("Ford").should("have.value","ford")
    

})


it.skip("Auto suggest static Dropdown",()=>{

    cy.visit("https://www.wikipedia.org/")
  cy.get("#searchInput").type("Tamilnadu")
  cy.get(".suggestions-dropdown>a").contains("Agricultural").click()

  cy.get(".mw-page-title-main").should("have.text","Tamil Nadu Agricultural University")
    

})
it("Auto suggest dynamic Dropdown",()=>{

    cy.visit("https://www.google.com/")
    cy.get('#APjFqb').type("Tamilnadu")

    cy.get("li[class='sbct PZPZlf']").each(($el, index,$list)=>{
        if($el.text()=="Tamilnadu tourism"){
            cy.wrap($el).click
        }

    })
 
    

})
})