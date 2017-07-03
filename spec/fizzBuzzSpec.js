describe("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("returns a number if not a multiple of 3 or 5", function() {
    expect(fizzBuzz.play(2)).toEqual(2);
  });

  it("returns Fizz if number is a multiple of 3", function() {
    expect(fizzBuzz.play(3)).toEqual("Fizz");
  });

  it("returns Buzz if number is a multiple of 5", function() {
    expect(fizzBuzz.play(5)).toEqual("Buzz");
  });

  it("returns FizzBuzz if number is multiple of 3 and 5", function() {
    expect(fizzBuzz.play(15)).toEqual("FizzBuzz");
  });
});
