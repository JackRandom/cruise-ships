const Ship = require('../src/cruise-ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/itinerary.js');

describe('Port constructor', () => {
    it('returns Port as an object', () => {
      expect(new Port()).toBeInstanceOf(Object);
    });

    it('port has a name property', () => {
        const port = new Port('Dover');
        
        expect(port.name).toEqual('Dover');
      });
  });
  describe('addShips', () => {
    it('add a ship to the port', () => {
      const port = new Port('Dover');
      const ship = {};
      
      port.addShip(ship);
      
      expect(port.dockedShip).toContain(ship);
    });
  });

    describe('removeShip', () => {
    it('can remove a ship from the port', () => {
      const port = new Port('Dover');
      const titanic = {};
      const waverly = {};
      
      port.addShip(titanic);
      port.addShip(waverly);
      port.removeShip(titanic);
      
      expect(port.dockedShip).toEqual([waverly]);
    });
  });