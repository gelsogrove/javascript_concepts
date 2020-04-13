var obj = {one: 1, two: 2};
var obj2 = obj; //reference
obj.one = 99;
console.log(obj); //{ one: 99, two: 2 }
console.log(obj2); //{ one: 99, two: 2 }
console.log(obj === obj2); // TRUE

console.log('**********************************');
var food = { meat: 'bacon', fish: 'salmon' };
cloneFood = {...food, meat: 'beef'};
console.log(food); //{ meat: 'beef', fish: 'salmon' }
console.log(cloneFood); // { meat: 'bacon', fish: 'salmon' }
console.log(food === cloneFood); // FALSE


console.log('**********************************');
const arr = [1,2,3]
const arrCopy = [...arr, 5]  
console.log(arr);
console.log(arrCopy);