const Park = function(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
};

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaurByName = function(dinosaur){
    const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur.name)
    this.dinosaurs.splice(indexOfDinosaur, 1)
}

Park.prototype.mostVisitedDinosaur = function(){
    let attractiveDinosaur = this.dinosaurs[0];

    for (const dinosaur of this.dinosaurs){
        if (dinosaur.guestsAttractedPerDay > attractiveDinosaur.guestsAttractedPerDay) {
            attractiveDinosaur = dinosaur
        }
    }
    return attractiveDinosaur
}
module.exports = Park