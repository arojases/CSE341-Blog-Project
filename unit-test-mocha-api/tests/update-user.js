const expect = require('chai').expect;
const request = require('request');

const URL = 'http://localhost:8080';

describe('Update User API', () => {
  describe('user UPDATED', () => {

    const user_id = '641c8f24179889d895556395'
    const userName = 'Eliza';
    const password = 'Eliza!@54321';
    const firstName = 'Elizabeth';
    const lastName = 'Tellez';
    const email = 'owas@cse341.com';

    it('Status & Content', done => {
        request.put(`${URL}/users/${user_id}`, {
          json: {
            "userId": `${user_id}`,
            "username": `${userName}`,
            "password": `${password}`,
            "firstName": `${firstName}`,
            "lastName": `${lastName}`,
            "email": `${email}`
          }
        }, (_, response) => {
          expect(response.statusCode).to.equal(200)
          done()
        })
      })
  })
})