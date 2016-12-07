function Weather() {}

Weather.prototype.isStormy = function(){
  return true;
}

Weather.prototype.randomize = function(){
    min = Math.ceil(1);
    max = Math.floor(10);
    return Math.floor(Math.random() * (max - min)) + min;
}
