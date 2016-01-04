// whitespace: invisible character which create literaal space in the written code.
// javascript is liberal in accepting whitespaces.
// function statement cannot be standalone.
// function statement can be standalone if it is wrapped in parentheses. In that case it can be standalone.
// this type of functions are generally called IIFE - imediately invoke function expressions.

var firstName = 'John';

(function(name){
  var greeting = 'Inside IIFF: hello';
  console.log(greeting + ' ' + name);

}(firstName));