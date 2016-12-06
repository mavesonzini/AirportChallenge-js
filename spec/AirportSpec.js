describe("Airport", function() {

  var airport;

  beforeEach(function () {
    airport = new Airport;
    plane = jasmine.createSpyObj('plane',
      ['land', 'takeOff']
    )
  });

  describe("landing", function() {

    beforeEach(function(){
      airport.land(plane);
    });

    it("should accept new airplanes", function(){
      expect(plane.land).toHaveBeenCalled();
    });

    it("should store airplanes", function(){
      expect(airport.planes).toEqual([plane]);
    });
  });

  describe("taking off", function(){

    beforeEach(function(){
      airport.land(plane);
      airport.taxi(plane);
    });

    it("should taxi an airplane", function(){
      expect(plane.takeOff).toHaveBeenCalled();
    });

    it("should no longer be  in the airport", function(){
      expect(airport.planes).toEqual( [] );
    });
  });

});
