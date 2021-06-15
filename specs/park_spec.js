const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() { 
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let park;
  beforeEach(function () {
    dinosaur1 = new Dinosaur('Achelousaurus', 'Herbivores', 30)
    dinosaur2 = new Dinosaur('Acrocanthosaurus', 'Carnivornes', 50)
    dinosaur3 = new Dinosaur('Avimimus', 'Omnivores', 40)
    dinosaur4 = new Dinosaur('Pentaceratops', 'Herbivores', 70)
    park = new Park("Jurassic Park", 15)
  })

  it('should have a name', function(){
    const actual = park.name;
  assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 15);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur4);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.removeDinosaurByName(dinosaur1);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    const actual = park.mostVisitedDinosaur();
    assert.deepStrictEqual(actual, dinosaur4);
  });

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to calculate the total number of visitors per day');

  xit('should be able to calculate the total number of visitors per year');

  xit('should be able to calculate total revenue for one year');

});
