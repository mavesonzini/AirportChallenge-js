function Airport(capacity=20) {
  this.planes = [];
  this.capacity = capacity;
}

Airport.prototype.landPlane = function(plane){
  return true;
}

Airport.prototype.takeOffPlane = function(plane){
  return true;
}

function Plane(){

}
