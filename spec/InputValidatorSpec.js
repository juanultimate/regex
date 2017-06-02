describe("InputValidator", function() {
  var validator;


  beforeEach(function() {
    validator = new InputValidator();
  });

  it("should be able to validate numbers", function() {
    expect(validator.validate('99999a')).toEqual(true);
      });


});
