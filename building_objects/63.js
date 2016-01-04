// objects don't create new executin contexts
var person = {
  firstname: 'Default',
  lastname: 'Default',
  greet: function(){
    return 'Hi ' + this.firstname;
  }
}

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);

// Polyfill: code that adds a feature a engine may lack.
