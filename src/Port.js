

class Port {
    constructor(name){
    this.name = name;
    this.dockedShip = [];

    }
addShip(ship) {
    this.dockedShip.push(ship);

};

removeShip(ship) {
    const removeShipIndex = this.dockedShip.indexOf(ship);
    this.dockedShip.splice(removeShipIndex, 1);
}
};

module.exports = Port;