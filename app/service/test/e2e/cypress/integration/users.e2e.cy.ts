import { cy } from '../support/commands';
describe('Users API', () => {
  it('should return all users', () => {
    cy.request('GET', '/users').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
    });
  });

  it('should return a user by ID', () => {
    cy.request('GET', '/users/1').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', '1');
    });
  });

  it('should create a new user', () => {
    cy.request('POST', '/users', {
      email: 'newuser@example.com',
      name: 'New User',
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('email', 'newuser@example.com');
    });
  });
});
