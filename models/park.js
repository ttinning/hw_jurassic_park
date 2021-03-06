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

Park.prototype.findBySpecies = function(species){
    const foundSpecies = []

    for (const dinosaur of this.dinosaurs) {
        if (dinosaur.species === species) {
            foundSpecies.push(dinosaur);
        }
    }
    return foundSpecies  
}

Park.prototype.totalVisitorsPerDay = function() {
    let averageDailyVisitors = 0;

    for (const dinosaur of this.dinosaurs) {
        averageDailyVisitors += dinosaur.guestsAttractedPerDay;
    }
    return averageDailyVisitors;
}

Park.prototype.totalVisitorsPerYear = function() {
    return this.totalVisitorsPerDay() * 365
}

Park.prototype.totalTicketRevenue = function() {
    return this.ticketPrice * this.totalVisitorsPerYear()
}
Park.prototype.removeBySpecies = function(species) {
    const newDinosaurs = []

    for (const dinosaur of this.dinosaurs) {
        if (dinosaur.species !== species) {
            newDinosaurs.push(dinosaur);
        }
    }
    this.dinosaurs = newDinosaurs;
}
module.exports = Park