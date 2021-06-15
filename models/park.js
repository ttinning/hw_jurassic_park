const Park = function(name, ticketPrice, dinosaurs) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
};

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaurByName = function(dinosaur){
    const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur.name)
    this.dinosaurs.splice(indexOfDinosaur, 1)
}

module.exports = Park