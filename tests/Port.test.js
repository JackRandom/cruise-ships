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
  // describe('setSail', () => {
  //   it('ship sets sail from a port', () => {
  //       const ship = new Ship('Dover');

  //       ship.setSail();

  //     expect(ship.currentPort).toBe(false);
  //   });

    // describe('dockShip', () => {
    //   it('ship docks at a port if it has set sail', () => {
    //       const ship = new Ship('Dover');
  
    //       ship.dockShip();
  
    //     expect(ship.currentPort).toBe(false);
    //   });

  // });