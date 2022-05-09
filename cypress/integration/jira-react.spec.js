/// <reference types="cypress" />


describe( "Issue Tracker Test " , ()=>{

    beforeEach(()=> {
         cy.visit("http://localhost:3000")
    })

    it("Tests " ,()=>{
         // test for topnav bar 
         cy.get("[data-tag='navbar']").should('exist')

         // test for create project form 
         cy.get("[data-tag='project-form']").should('exist')
         cy.get("[data-tag='pf-description']").type("simple jira clone, built using react.js");
         cy.get("[data-tag='pf-lead']").type("Rakesh");
         cy.get("[data-tag='pf-name']").type("Jira Clone");
         cy.get("[data-tag='pf-submit']").click(); 

         cy.get("[data-tag='header']").should('exist')
         
         // check create issue form 
         cy.get("[data-tag='create-issue']").click()
         cy.get('[data-tag="form-container"]').should('exist')
          
         cy.get("[data-tag='if-description']").type("Hello world")
         cy.get("[data-tag='if-summary']").type("1Hello")
         cy.get("[data-tag='assigned_to']").type("Rocky")
         cy.get("[data-tag='if-submit']").click()
             

         cy.get("[data-tag='create-issue']").click()
         cy.get('[data-tag="form-container"]').should('exist')
          
         cy.get("[data-tag='if-description']").type("Hello world")
         cy.get("[data-tag='if-summary']").type("2Hello")
         cy.get("[data-tag='assigned_to']").type("Rocky")
         cy.get("[data-tag='if-submit']").click()
             
         // testing search box 
         cy.get("[data-tag='search-box']").type("1")
         cy.get("[data-tag='card-container']").should('exist')
   
         cy.get("[data-tag='card-container']").should('contain.text' , "1Hello").click() 
         cy.get("[data-tag='expanded-card']").should('exist')
         cy.get("[data-tag='drop-down']").should('exist')
              
     })
})