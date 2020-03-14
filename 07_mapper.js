/* EXAMPLE 1 */
var arr = [2, 5, 6, 3, 8, 9]; 
  var newArr = arr.map((val, index) => { 
    return {key:index, value:val*val}; 
})   
console.log(newArr) 



/* EXAMPLE 2 */
let L = [1,2,3];
let add = (item) => item +1;
let sum = (A,I) => { return A + I}; 
let val = L.map(add).reduce(sum,0); // 2 3 4

console.log(val) //9
