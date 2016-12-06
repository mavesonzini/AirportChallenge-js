function Airplane() {
  this.isFlying = true;
}

Airplane.prototype.land = function() {
  return this.isFlying = false;
}

Airplane.prototype.takeOff = function() {
  return this.isFlying = true;
}
