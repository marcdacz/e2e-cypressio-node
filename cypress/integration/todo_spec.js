describe('ToDo React', () => {
	const faker = require('faker');

	before(() => {
		cy.visit('http://todomvc.com/examples/react/#/');
	});

	it('should show the correct page title', () => {
		cy.title().should('include', 'React • TodoMVC');
	});

	it('should allow to create first todo item', () => {
		const toDoItem = faker.lorem.sentence();
		cy.get('.new-todo').type(`${toDoItem}{enter}`);
		cy.get('.todo-count').should('have.text', '1 item left');
		cy.contains('li', toDoItem).should('exist');
	});

	it('should increment total todo when adding another item', () => {
		const toDoItem = faker.lorem.sentence();
		cy.get('.new-todo').type(`${toDoItem}{enter}`);
		cy.get('.todo-count').should('have.text', '2 items left');
		cy.contains('li', toDoItem).should('exist');
	});
});