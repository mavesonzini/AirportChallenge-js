function Airplane() {
  this.isFlying = true;
}

Airplane.prototype.land = function() {
  return this.isFlying = false;
}
