var Person = function (firstAndLast) {
  var fullName = firstAndLast;

  this.setFirstName = function (first) {
    fullName = `${first} ${fullName.split(' ')[1]}`;
  };
  this.setLastName = function (last) {
    fullName = `${fullName.split(' ')[0]} ${last}`;
  };
  this.setFullName = function (name) {
    fullName = name;
  };
  this.getFirstName = function () {
    return fullName.split(' ')[0];
  };
  this.getLastName = function () {
    return fullName.split(' ')[1];
  };
  this.getFullName = function () {
    return fullName;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();

/*

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

*/
