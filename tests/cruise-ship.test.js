const Ship = require('../src/cruise-ship.js');

const port = {
  removeShip: jest.fn(),
  addShip: jest.fn(),
};

dover = {
  ...port,
  name: 'Dover',
  ships: []
};

clyde = {
  ...port,
  name: 'Clyde',
  ships: []
};

itinerary = {
  ports: [dover, clyde]
};

let ship = new Ship(itinerary);

describe('the ship constructor object', () => {
  describe('tests the ship constructor method using beforeEach DRY method,', () => {
      expect(ship).toBeInstanceOf(Object);
    });

    describe('initial properties', () => {
      it('accepts an itinerary and sets the first port to currentPort upon initilisation', () => {
          expect(ship.currentPort.addShip).toHaveBeenCalledWith(ship);
          expect(ship.previousPort).toEqual(null);
      });
    })
  });
  
  describe('setSail function', () => {
    describe('tests setSail using ship, ports and itinerary with beforeEach spies', () => {

      beforeEach(() => {
     
        ship = new Ship(itinerary);

    it('tests if a ship sets sail from a port', () => {

      ship.setSail();
    
      expect(ship.currentPort).toBeFalsy();
      expect(dover.ships).not.toContain(ship);
  });

  it('gets added to port on instantiation', () => {
    expect(port.addShip).toHaveBeenCalledWith(ship);
  });

  it('tests to see if a ship cannot sail further than its itinerary', () => {

  
    ship.setSail();
    ship.dock();
  
    expect(() => ship.setSail()).toThrowError('End of itinerary reached');
      }); 

  it('tests to see if a ship can dock at a different ports', () => {

  
    ship.setSail();
    ship.dock();
  
    expect(ship.currentPort).toBe(clyde);
    expect(clyde.dockedShip).toContain(ship);
        });
      });
    });
  });
