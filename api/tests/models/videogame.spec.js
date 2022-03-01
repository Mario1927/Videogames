const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({description: 'Test game'})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should throw an error if description is null', (done) => {
        Videogame.create({name: 'Super Mario'})
        .then(() => done(new Error('It requires a valid description')))
        .catch(() => done());
      }) 
      it('should work when its a valid name and description', (done) => {
        Videogame.create({ name: 'Super Mario Bros', description: 'Test game'})
        .then(() => done())
        .catch(() => done(new Error('Something failed')));
      });
    });
  });
});
