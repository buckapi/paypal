describe('Calculadora de Comisiones', () => {
  beforeEach(() => {
    // Carga la página de la aplicación
    cy.visit('http://localhost:3000'); // Cambia la URL si es necesario
  });

  it('Calcula correctamente el monto requerido para enviar', () => {
    cy.get('#desired').type('100'); // Introducir el monto deseado
    cy.get('#requiredTwoCommissions').check(); // Seleccionar dos comisiones
    cy.get('#required-result', { timeout: 5000 }) // Esperar a que se actualice el DOM
      .should('contain', 'Monto total a enviar'); // Verificar que aparece el resultado
  });

  it('Calcula correctamente el monto recibido', () => {
    cy.get('#amountToSend').type('150'); // Introducir el monto a enviar
    cy.get('#receivedTwoCommissions').check(); // Seleccionar dos comisiones
    cy.get('#received-result', { timeout: 5000 }) // Esperar a que se actualice el DOM
      .should('contain', 'Monto recibido'); // Verificar que aparece el resultado
  });

  it('Muestra error para entrada inválida en "monto deseado"', () => {
    cy.get('#desired').type('-100'); // Introducir un valor negativo
    cy.get('#required-result', { timeout: 5000 }) // Esperar a que se actualice el DOM
      .should('contain', 'Por favor, introduce un monto válido'); // Verificar mensaje de error
  });

  
});
