const Ship = require('../src/cruise-ship.js');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Ship()).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
        const ship = new Ship('Dover');
        expect(ship.startingPort).toBe('Dover');
      });
  });
  describe('setSail', () => {
    it('ship sets sail from a port', () => {
        const ship = new Ship('Dover');

        ship.setSail();

      expect(ship.startingPort).toBe(false);
    });


  });