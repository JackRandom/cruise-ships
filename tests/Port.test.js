const Ship = require('../src/cruise-ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/itinerary.js');

describe('Port constructor object', () => {
  describe('returns Port as an object', () => {
  let port;

  beforeEach(() => {
    port = new Port('Dover');
      expect(new Port()).toBeInstanceOf(Object);
    });

    it('port has a name property', () => {
        
        expect(port.name).toEqual('Dover');
      });
  });
});
  describe('addShips function', () => {
    describe('tests if it can add a ship to the port', () => {
      let port;
      let ship;

      beforeEach(() => {
        port = new Port('Dover');
        ship = {};
      
      port.addShip(ship);
      
      expect(port.dockedShip).toContain(ship);
    });
  });
});

    describe('removeShip function', () => {
    describe('tests if it can remove a ship from the port', () => {
      let port;
      let titanic;
      let waverly;

      beforeEach(() => {
        port = new Port('Dover');
        titanic = {};
        waverly = {};
      
      port.addShip(titanic);
      port.addShip(waverly);
      port.removeShip(titanic);
      
      expect(port.dockedShip).toEqual([waverly]);
    });
  });
});