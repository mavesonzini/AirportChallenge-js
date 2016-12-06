describe("Airplane", function(){
  var airplane;

  beforeEach(function() {
    airplane = new Airplane();
  });

  it("should land", function() {
    expect(airplane.land()).toBeTruthy();
  });

});
