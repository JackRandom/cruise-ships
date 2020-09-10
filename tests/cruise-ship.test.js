const Ship = require('../src/cruise-ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/itinerary.js');

describe('constructor', () => {
  describe('ship, port and itinerary', () => {
    let ship;
    let itinerary;
    let port;

    beforeEach(() => {
    port = new Port('Dover');
    itinerary = new Itinerary([port]);
    ship = new Ship(itinerary);


      expect(ship).toBeInstanceOf(Object);
    });

      it('has a starting port', () => {
     
        expect(ship.currentPort).toBe(port);
      });
    });
  });
  describe('setSail function', () => {
    describe('tests setSail using ship, ports and itinerary', () => {
      let ship;
      let itinerary;
      let dover;
      let clyde;

      beforeEach(() => {
        dover = new Port('Dover');
        clyde = new Port('Clyde');
        itinerary = new Itinerary([dover, clyde]);
        ship = new Ship(itinerary);

    it('a ship sets sail from a port', () => {

      ship.setSail();
    
      expect(ship.currentPort).toBeFalsy();
  });

  it('cannot sail further than its itinerary', () => {

  
    ship.setSail();
    ship.dock();
  
    expect(() => ship.setSail()).toThrowError('End of itinerary reached');
      }); 

  it('tests to see if they can dock at a different port', () => {

  
    ship.setSail();
    ship.dock();
  
    expect(ship.currentPort).toBe(clyde);
    expect(clyde.dockedShip).toContain(ship);
        });
      });
    });
  });
