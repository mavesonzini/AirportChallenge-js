function Weather() {}

Weather.prototype.isStormy = function(){
  return true;
}

Weather.prototype.randomize = function(){
  return Math.random();
}
