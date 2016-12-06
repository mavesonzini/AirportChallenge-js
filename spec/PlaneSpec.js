describe("Plane creation", function(){

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  it("can create an instance of plane", function(){
    expect(plane).toBeDefined();
  });

});


describe("Plane status", function(){

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  it("returns whether plane is flying", function(){
    expect(plane.flying).toEqual(true);
  });

  it("changes the plane's status to landed", function(){
    plane.land();
    expect(plane.flying).toEqual(false);
  });

});
