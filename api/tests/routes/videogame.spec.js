/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name: 'Super Mario Bros',
  description: 'Game for testing',
  genres: ['Action', 'Indie'],
  platforms: ['PC']
};

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame))
    );

  describe('GET /videogames', () => {
    it('should get 200', (done) => {
      agent.get('/videogames')
      .then((res) => expect(res.statusCode).to.equal(200))
      done();
    });
  });

  describe('GET /videogames/:id', () => {
    it('should get the correct name', (done) => {
      agent.get('/videogames/3498')
      .then((res) => expect(res.name).to.equal('Grand Theft Auto V'))
      done();
    })
  });

  describe('POST /videogames/create/', () => {
    it('should receive a bad response', (done) => {
      agent.post('/videogames/create')
      .send({})
      .then((res) => expect(res.statusCode).to.equal(500))
      done();
    })
  });

  describe('POST /videogames/create/', () => {
    it('should receive a succesfully response', (done) => {
      agent.post('/videogames/create')
      .send(videogame)
      .then((res) => expect(res).to.equal('Game created succesfully'))
      done();
    })
  })
});
