const Ship = require('../src/cruise-ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/itinerary.js');

describe('itinerary constructor', () => {
    it('returns itinerary as an object', () => {
      expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it('itinerary can have multiple ports ', () => {
        const dover = new Port('Dover');
        const clyde = new Port('Clyde');
        
        const itinerary = new Itinerary([dover, clyde])
        
        expect(itinerary.ports).toEqual([dover, clyde]);
      });
  });