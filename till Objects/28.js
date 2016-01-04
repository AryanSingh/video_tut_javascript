// if a function is expectiong an argument and we don't give any then it will set the argument to undefined.
//  a default value can be given using little trick.

function greet(name){
  name = name || '<Your name here>';
  console.log('Hello ' + name);
}

greet('Tony');
greet();