/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('Form Devs', () => {
  beforeEach(() => {
    cy.visit('../../formulario.html')
  });
  it('fills the form and submits', () => {    
    cy.get('#nome').as('firstname').type(faker.name.firstName())
    cy.get('#sobrenome').as('lastName').type(faker.name.lastName())
    cy.get('#email').as('email').type(faker.internet.email())
    cy.get('#senioridade').select('Junior')
    cy.get('#check > :nth-child(1) > strong').should('have.text', 'Selecione as tecnologias que utiliza:')
    cy.get('#tecnologia1').click()
    cy.get('#tecnologia2').click()
    cy.get('#tecnologia3').click()
    cy.get(':nth-child(6) > label > strong').should('have.text', 'Conte um pouco da sua experiência:')
    cy.get('#experiencia').type(faker.lorem.paragraph())   
    cy.get('.botao').click()
    cy.get('#titulo').should('have.text', 'Cadastro de DEVs')
  });  
});