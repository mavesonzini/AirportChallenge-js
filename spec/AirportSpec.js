describe("Airport creation", function(){

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  it("can create an instance of an airport", function(){
    expect(airport).toBeDefined();
  });

  it("has an empty array to begin with", function(){
    expect(airport.planes).toEqual([]);
  })

  it("has a default capacity of 20", function(){
    expect(airport.capacity).toEqual(20);
  })

  it("can accept a custom capacity", function(){
    airport2 = new Airport(15);
    expect(airport2.capacity).toEqual(15);
  })

});

describe("Landing", function(){

  beforeEach(function(){
    airport = new Airport(1);
    plane = new Plane();
    plane2 = new Plane();
  });

  it("can instruct a plane to land", function(){
    airport.landPlane(plane);
    expect(airport.planes).toEqual(jasmine.arrayContaining([plane]));
  });

  it("raises an exception if the airport is full", function() {
    airport.landPlane(plane);
    expect(function(){airport.landPlane(plane2)}).toThrowError("Airport is full");
  });

});

describe("Taking off", function(){

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  it("can instruct a plane to take off", function(){
    airport.landPlane(plane);
    airport.takeOffPlane(plane);
    expect(airport.planes).not.toEqual( jasmine.arrayContaining([plane]) );
  });

});

describe("Checking capacity", function(){

  beforeEach(function(){
    airport = new Airport(1);
    plane = new Plane();
  });

  it("can detect when an airport is full", function(){
    airport.landPlane(plane);
    expect(airport.isFull()).toEqual(true);
  });

});
