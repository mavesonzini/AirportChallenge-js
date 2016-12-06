function Airport() {
  this.planes = [];
  this.isStormy = false;
}

Airport.prototype.land = function(plane){
  plane.land();
  return this.planes.push( plane );
}

Airport.prototype.taxi = function(plane){
  plane.takeOff();
  return this.planes.pop(plane);
}
