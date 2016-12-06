function Airport() {
  planes = [];
}

Airport.prototype.land = function(plane){
  planes.push(plane.land());
}
