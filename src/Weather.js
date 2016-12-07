function Weather() {}

Weather.prototype.isStormy = function(){
  if (weather.randomize() > 5){
    return true;
  } else {
    return false;
  }
}

Weather.prototype.randomize = function(){
    min = Math.ceil(1);
    max = Math.floor(10);
    return Math.floor(Math.random() * (max - min)) + min;
}
