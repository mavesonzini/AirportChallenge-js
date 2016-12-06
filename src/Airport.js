function Airport(capacity=20) {
  this.planes = [];
  this.capacity = capacity;
}

Airport.prototype.landPlane = function(plane){
  this.planes.push(plane);
}

Airport.prototype.takeOffPlane = function(plane){
  return true;
}

function Plane(){

}
