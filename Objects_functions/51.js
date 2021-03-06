// functional programming - where youm think and code in terms of functions.
function mapForEach(arr, fn){

  var newArr = [];
  for(var i=0; i< arr.length; i++){
    newArr.push(
      fn(arr[i])
      )
  }
  return newArr;
}
var arr1 = [1,2,3];
console.log(arr1);

var arr2 = mapForEach(arr1, function(item){
  return item*item;
})

var arr3 = mapForEach(arr1, function(item){
  return item > 2;
})

var checkPastLimit = function(limiter, item){
  return item > limiter;
}

var checkPastLimitSimplified = function(limiter){
  return function(limiter,item){
    return item > limiter;
  }.bind(this,limiter);
};
var arr4 = mapForEach(arr1, checkPastLimit.bind(this,1));
var arr5 = mapForEach(arr1, checkPastLimitSimplified(2));
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);

var arr6 = _.map(arr1, function(item){return item * 3});
console.log(arr6);