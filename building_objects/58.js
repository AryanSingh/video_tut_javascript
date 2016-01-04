// every function in javascript has a prototype.
// with .prototype function constructor we can add any property at a later point to all the objects created by the function constructor.
// properties are generally sitting inside function constructor but methods are sitting inside prototype.
// methods are added to prototype to conserve memory as functions are objects and consume memory and if methods were present inside function
// every object created by the function will have its own copy of method and consume more space.