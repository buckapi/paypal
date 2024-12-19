describe('Calculadora de Comisiones', () => {
  beforeEach(() => {
    // Carga la página de tu aplicación
    cy.visit('http://localhost:3000'); // Cambia la URL según tu entorno
  });

  it('Calcula correctamente el monto requerido para enviar', () => {
    cy.get('#desired').type('100'); // Introducir el monto deseado
    cy.get('#requiredTwoCommissions').check(); // Seleccionar dos comisiones
    cy.get('#required-result').should('contain', 'Monto total a enviar'); // Verificar que aparece el resultado
  });

  it('Calcula correctamente el monto recibido', () => {
    cy.get('#amountToSend').type('150'); // Introducir el monto a enviar
    cy.get('#receivedTwoCommissions').check(); // Seleccionar dos comisiones
    cy.get('#received-result').should('contain', 'Monto recibido'); // Verificar que aparece el resultado
  });

  it('Muestra error para entrada inválida en "monto deseado"', () => {
    cy.get('#desired').type('-100'); // Introducir un valor negativo
    cy.get('#required-result').should('contain', 'Por favor, introduce un monto válido');
  });

  it('Muestra error para entrada inválida en "monto a enviar"', () => {
    cy.get('#amountToSend').type('abc'); // Introducir texto no válido
    cy.get('#received-result').should('contain', 'Por favor, introduce un monto válido');
  });
});
