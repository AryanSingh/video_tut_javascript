function a(){
  this.newvariable = 'hello';
}

a();
console.log(newvariable);
var c = {
  name: 'The c object',
  log: function(){
    console.log(this);
  }
}

c.log();
// if this keyword is inside a function which is inside another function which is a method of an object then this keyword points towards the global context.