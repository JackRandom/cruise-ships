const Port = require('../src/Port.js');

const mockPort = new Port('Dover');
const mockShip = jest.fn();

describe('Port constructor object', () => {
  it('returns Port as an object', () => {

   
      expect(mockPort).toBeInstanceOf(Object);
    });

    it('port has a name property', () => {
        
        expect(mockPort.name).toEqual('Dover');
      });
      it('has a ships property', () => {
        expect(mockPort.dockedShip).toBeInstanceOf(Array);
    });
  });

  describe('addShips function', () => {
    describe('tests if it can add a ship to the port', () => {

      mockPort.addShip(mockShip);
      
      expect(mockPort.dockedShip).toContain(mockShip);
    });
  });

    describe('removeShip function', () => {
    describe('tests if it can remove a ship from the port', () => {

      mockPort.removeShip(mockShip);
      
      expect(mockPort.dockedShip).not.toContain(mockShip);
    });
  });
