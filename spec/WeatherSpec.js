describe("Weather", function(){

  beforeEach(function(){
    weather = new Weather();
  });


  it("can check the weather", function() {
    expect(weather.isStormy()).toEqual(true);
  });


});
