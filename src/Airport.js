function Airport() {
  this.planes = [];
  this.isStormy = false;
}

Airport.prototype.land = function(plane){
  plane.land();
  return this.planes.push( plane );
}

Airport.prototype.taxi = function(plane){
  if (this.isStormy) {
    throw new Error("Can't take off it's stormy");
  } else {
    plane.takeOff();
    return this.planes.pop(plane);
  }
}
