const Ship = require('../src/cruise-ship.js');
const Port = require('../src/Port.js');

describe('constructor', () => {
    it('returns Ship as an object', () => {
      expect(new Ship()).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
      const port = new Port('Dover')
      const ship = new Ship(port);
        expect(ship.currentPort).toBe(port);
      });

      it('can dock at a different port', () => {
        const dover = new Port('Dover');
        const ship = new Ship(dover);

        const clyde = new Port('Clyde');
        ship.dock(clyde);

          expect(ship.currentPort).toBe(clyde);
        });
  });
  describe('setSail', () => {
    it('ship sets sail from a port', () => {
      const port = new Port('Dover')
      const ship = new Ship(port)

        ship.setSail();

      expect(ship.currentPort).toBe(false);
    });

    // describe('dockShip', () => {
    //   it('ship docks at a port if it has set sail', () => {
    //       const ship = new Ship('Dover');
  
    //       ship.dockShip();
  
    //     expect(ship.currentPort).toBe(false);
    //   });

  });