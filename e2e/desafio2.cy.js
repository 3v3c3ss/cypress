/// <reference types="cypress" />

describe("Desafio 2 Todo List", () =>{
  let loginData;

  before('before', () => {
    cy.fixture('fixture1').then(data => {
        loginData = data;
    });
  }); 

  beforeEach('Hacer log in', () => {
    cy.visit('');
    cy.get('#registertoggle').dblclick();
    cy.get('#user').type(loginData.test1.user);
    cy.get('#pass').type(loginData.test1.pass);
    cy.get('#submitForm').click();
    cy.get('[id="todolistlink"]').click();

  });

  it('Log In', () => {
      cy.xpath("//input[@id='task']").type(`${loginData.tarea1.tarea} {enter}`);
      cy.xpath("//input[@id='task']").type(`${loginData.tarea2.tarea} {enter}`);
      cy.xpath("//input[@id='task']").type(`${loginData.tarea3.tarea} {enter}`);
      cy.xpath("//input[@id='task']").type(`${loginData.tarea4.tarea} {enter}`);
      cy.xpath("//input[@id='task']").type(`${loginData.tarea5.tarea} {enter}`);
    
    });

    it('Validar botones', () => {
      cy.xpath("//button[@id='all']").should('exist');
      cy.xpath("//button[@id='completed']").should('exist');
      cy.xpath("//button[@id='active']").should('exist');
      cy.xpath("//button[@id='removeAll']").should('exist');

    });
    
    
    it('eliminar Tarea 2', () => {
      cy.get('input#task').type(`${loginData.tarea1.tarea} {enter}`);
      cy.get('input#task').type(`${loginData.tarea2.tarea} {enter}`);
      cy.contains('Tarea 1').click();
      cy.contains('Tarea 2').click();
      cy.contains('Tarea 2').siblings('button').click();

    });

    it('eliminar Tarea 1', () => {
      cy.get('input#task').type(`${loginData.tarea1.tarea} {enter}`);
      cy.get('input#task').type(`${loginData.tarea2.tarea} {enter}`);
      cy.contains('Tarea 1').siblings('button').click();

    });

    
  
  });