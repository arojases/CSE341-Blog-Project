const expect = require('chai').expect;
const request = require('request');

const URL = 'http://localhost:8080';


describe('User API', () => {
  describe('CREATE USER', () => {
    
    it('Create user SUCCESS', done => {
      request.post(`${URL}/auth/register`, {
        json: {
            username: "Owamamwen",
            email: "owas@gmail.com",
            password: "Owas!54321"
        }
      }, (_, response) => {
        expect(response.statusCode).to.equal(200)
        done()
      })
    })
  })
})