'use strict';
// flower constructor
function Flower(data){
  this.flower = data.flower;
  this.title = data.title;
  this.growing = data.growing;
  this.area = data.area;
  this.image = data.image;
  this.link = data.link;
}
// stores all finished flower objects in an array
Flower.allFlowers = [];
// gets local data from JSON data file, once all are added it goes through the array and creates a template from each object
Flower.fetch = function(){
  $.getJSON('/data/flowers.JSON').then(function(data){
    Flower.addFlowers(data);
    Flower.createFlowers();
  });
}();
// creates and adds data to allFlowers array
Flower.addFlowers = function(data){
  data.forEach((ele) => Flower.allFlowers.push(new Flower(ele)))
}
//
Flower.createFlowers = function(){
  let template = Handlebars.compile($('#flower-stat-template').html());
  Flower.allFlowers.forEach(function(ele){
    $('#stats').append(template(ele));
  })
}
