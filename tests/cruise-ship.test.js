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
  it('tests the ship constructor to see if its an object', () => {
      expect(ship).toBeInstanceOf(Object);
    });

  it('gets added to port on instantiation', () => {
      expect(port.addShip).toHaveBeenCalledWith(ship);
    });
  it('tests to see if the ship has no previous port', () => {
      expect(ship.previousPort).toEqual(null);
    });
  
    
  it('gets an itinerary and sets the first port to currentPort upon initilisation', () => {
          expect(ship.currentPort.addShip).toHaveBeenCalledWith(ship);
      });
  });
  
  describe('setSail function', () => {

      beforeEach(() => {
     
        ship = new Ship(itinerary);

    it('tests if a ship sets sail from a port', () => {

      ship.setSail();
    
      expect(ship.currentPort).toBeFalsy();
      expect(dover.ships).not.toContain(ship);
  });

  it('tests to see if a ship cannot sail further than its itinerary', () => {

    ship.setSail();
    ship.dock();
  
    expect(() => ship.setSail()).toThrowError('End of itinerary reached');
      }); 


  it('tests the ships previous port once it has set sail', () => {
  
        ship.setSail();
       
        expect(ship.previousPort).toBeFalsy();
        }); 
    
    });
  
  });

  describe('dock function', () => {
    describe('tests dock using ship, ports and itinerary with beforeEach', () => {

      beforeEach(() => {
     
        ship = new Ship(itinerary);

  it('stays at the current port if called while already docked', () => {
      ship.dock();
  
        expect(ship.currentPort.name).toBe('Clyde');
        expect(ship.currentPort.addShip).toHaveBeenCalledWith(ship);

  it('tests to see if a ship can dock at a different ports', () => {

  
    ship.setSail();
    ship.dock();
  
    expect(ship.currentPort).toBe(clyde);
    expect(clyde.dockedShip).toContain(ship);
        });

      });
    });
  });
});
