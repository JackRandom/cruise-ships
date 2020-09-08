const Ship = require('../src/cruise-ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/itinerary.js');

describe('constructor', () => {
    it('returns Ship as an object', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

      expect(ship).toBeInstanceOf(Object);
    });
      it('has a starting port', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
      
        expect(ship.currentPort).toBe(port);
      });

  });
  describe('setSail', () => {

      it('ship sets sail from a port', () => {
        const dover = new Port('Dover');
        const clyde = new Port('Clyde');
        const itinerary = new Itinerary([dover, clyde]);
        const ship = new Ship(itinerary);
      
        ship.setSail();
      
        expect(ship.currentPort).toBeFalsy();
    });

    it('cannot sail further than its itinerary', () => {
      const dover = new Port('Dover');
      const clyde = new Port('Clyde');
      const itinerary = new Itinerary([dover, clyde]);
      const ship = new Ship(itinerary);
    
      ship.setSail();
      ship.dock();
    
      expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });

    describe('see if ships can dock at different ports', () => {
    it('can dock at a different port', () => {
      const dover = new Port('Dover');
      const clyde = new Port('Clyde');
      const itinerary = new Itinerary([dover, clyde]);
      const ship = new Ship(itinerary);
    
      ship.setSail();
      ship.dock();
    
      expect(ship.currentPort).toBe(clyde);
      expect(clyde.dockedShip).toContain(ship);
    })
    
  });
});