describe("Weather", function(){

  beforeEach(function(){
    weather = new Weather();
    spyOn(weather, 'randomize').and.returnValue(10)
  });


  it("can check the weather", function() {
    expect(weather.isStormy()).toEqual(true);
  });

  it("returns a number between 1 and 10", function(){
    expect(weather.randomize()).not.toBeLessThan(1);
    expect(weather.randomize()).not.toBeGreaterThan(10);
  });

  it("will be stormy weather if random number is 10", function(){
    expect(weather.isStormy()).toEqual(true);
  });
});
