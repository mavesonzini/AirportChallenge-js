function Airport() {
  this.planes = [];
}

Airport.prototype.land = function(plane){
  plane.land();
  return this.planes.push( plane );
}
