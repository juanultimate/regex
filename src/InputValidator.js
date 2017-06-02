function InputValidator() {
}
InputValidator.prototype.validate = function(text) {
  //var re = new RegExp('/^[^\/][0-9a-zA-Z\/\-]{2,30}$/');
  var re = new RegExp('([0-9\-]+)((/){0,2})');

  var myArray = re.test('????');
  console.log(myArray);
  console.log(re);
  return myArray;
};


