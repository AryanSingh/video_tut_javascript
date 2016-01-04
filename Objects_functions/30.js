// objects are collections of name value pairs which can be collection of other name value pairs.
// an object can contain  primitive or object properties or it can have functions. Functions inside 
// objects are called methods.
//  object is sitting in memory and it has references to other properties or methods related to it.
// A new object can be created by declaring like this: var a = new object();
// [] is called computed member access.
// . is also called member access operator.
// always use the dot operator for accessing something inside an object unless it is very important not to do so.
var person = new Object();
person["firstname"] = "Tony";
person["lastname"] = "Alicea";
var firstNameProperty = "firstname";
console.log(person);
console.log(person["firstname"]);
console.log(person[firstNameProperty]);
console.log(person.lastname);