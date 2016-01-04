// if a function does not find a variable which has been referenced isnside it
// it looks in its lexical environment meaning where the function physically sits, inside some other function or globla execution context.

function b(){
  console.log(myVar);
}

function a(){
  var myVar = 2;
  b();
}

var myVar = 1;
a();