describe("Airplane", function(){
  var airplane;

  beforeEach(function() {
    airplane = new Airplane();
  });

  it("should be start in the air", function() {
    expect(airplane.isFlying).toBeTruthy();
  });

  it("should be landed after landing", function() {
    airplane.land();
    expect(airplane.isFlying).toBeFalsy();
  });

  it("should take off from airport", function() {
    airplane.land();
    airplane.takeOff();
    expect(airplane.isFlying).toBeTruthy();
  })
});
