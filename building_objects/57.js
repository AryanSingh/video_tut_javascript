// we can create an object using keyword new on a function if the function is not returning any value.
// function construtors: a function that is used to construct objects.
// this variable points to new empty object which is returned from the function automatically.

function person(firstName, lastName){

  this.firstName = firstName;
  this.lastName =lastName;
  // return {greet: "hello"};
}

var John = new person('John', 'Doe');
var Jane = new person('Jane', 'Doe');

console.log(John);
console.log(Jane);
person.prototype.getFullName = function(){
  return this.firstName + ' ' + this.lastName;
}
console.log(John.getFullName());
console.log(person.prototype);


