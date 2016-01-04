// all functions are objects so all of them have access to three methods call(), apply() and bind()
// by using bind() we can associate this context of a function to another object which we pass as argument of bind()
// call does the same thing as bind but it executes the function where bind created a copy. apply is same as call only it
// takes arguments in an array.
// call and apply can be used for function borrowing between two objects.
// function currying: bind() can be used for settin up a fixed value of one or more parameters in the copy of the function.