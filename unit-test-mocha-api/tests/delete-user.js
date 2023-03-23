const expect = require('chai').expect;
const request = require('request');

const URL = 'http://localhost:8080';

describe('Delete User API', () => {
  describe('user DELETED', () => {

    const user_id = '641c8f24179889d895556395'
    const userName = 'Eliza';

    it('Status & Content', done => {
        request.delete(`${URL}/users/${user_id}`, {
          json: {
            "userId": `${user_id}`,
            "username": `${userName}`
          }
        }, (_, response) => {
          expect(response.statusCode).to.equal(200)
          done()
        })
      })
  })
})