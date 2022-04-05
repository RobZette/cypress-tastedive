/// <reference types="cypress" />


Cypress.Commands.add('querySearch', (query, type, info, limit, k) => {
    cy.request({
        url: 'https://tastedive.com/api/similar',
        qs: {
            q: query,
            type: type,
            info: info,
            limit: limit,
            k: k
        }
    })
})
