describe("Airport", function() {

  var airport;

  beforeEach(function () {
    airport = new Airport;
    plane = jasmine.createSpyObj('plane',
      ['land']
    )
  });

  it("should accept new airplanes", function(){
    airport.land(plane)
    expect(plane.land).toHaveBeenCalled();
  });

  it("should store airplanes", function(){
    airport.land(plane);
    expect(airport.planes).toEqual([plane]);
  });
});
