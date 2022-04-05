/// <reference types="cypress" />

describe('Create an account', () => {
  
  let recomendation = require('../fixtures/example.json')

  recomendation.forEach( rec => (

    it('should display similar resulsts for my query', () => {
    
      
        cy.querySearch(rec.query, rec.type, rec.info, rec.limit, rec.k)
          .then(response => {

            expect(response.body.Similar.Results).lengthOf(rec.limit)

            response.body.Similar.Results.forEach(item => (expect(item.Name).to.not.be.empty))
        })
    })

  ))
})