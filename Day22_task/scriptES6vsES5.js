
let arr = [1, 2, 3, 4, 5, 6,"a", "b", "c", "d"];
console.log("1.Chunk method for array-",arr)

//ES6
let i=0
let chunks=[]
while (i < arr.length) {
    chunks.push(arr.slice(i, i += 3));
  }
  console.log("ES6 output-",chunks)

//ES5
console.log("ES5 output- ", _.chunk(arr,3))

let arr1=[1, 2, 3]
console.log("2.Reduce method for array-",arr1)

console.log("ES6 output- ",arr1.reduce((total, n) => total + n));
console.log("ES5 output- ",_.reduce(arr1, function(total, n) { return total + n; }, 0));

console.log("3.Filter method for array-",arr1)
console.log("ES6 output- ",arr1.filter(n => n <= 2));
console.log("ES5 output- ",_.filter(arr1, function(n) { return n <= 2; }));

//Find
var array = [
    { 'name': 'lim', 'age': 26 },
    { 'name': 'kim', 'age': 28 },
    { 'name': 'choi', 'age': 32 },
    { 'name': 'park', 'age': 21 }
   ];
console.log("4.Find method for array-",array)

console.log("ES6 output- ",array.find(arr => arr.age < 28))

let result = _.find(array, arr => arr.age < 28);
 
console.log("ES5 output- ",result);

let arr2=[5, 10, 15, 20, 25]

console.log("5.Sum method for array-",arr2) 
const arrSum = arr2.reduce((a,b) => a + b, 0);
console.log("ES6 output- ",arrSum);
let output = _.sum(arr2); 
        
console.log("ES5 output- ",output);