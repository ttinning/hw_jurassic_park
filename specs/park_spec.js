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
    dinosaurs = [dinosaur1, dinosaur2, dinosaur3]
    park = new Park("Jurassic Park", 15, dinosaurs)
  })

  it('should have a name', function(){
    const actual = park.name;
  assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 15)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs.length;
    assert.deepStrictEqual(actual, 3)
  });

  xit('should be able to add a dinosaur to its collection');

  xit('should be able to remove a dinosaur from its collection');

  xit('should be able to find the dinosaur that attracts the most visitors');

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to calculate the total number of visitors per day');

  xit('should be able to calculate the total number of visitors per year');

  xit('should be able to calculate total revenue for one year');

});
