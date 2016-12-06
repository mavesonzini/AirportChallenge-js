describe("Plane creation", function(){

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  it("can create an instance of plane", function(){
    expect(plane).toBeDefined();
  });

});
