/* Object.assign */
var obj = {a : 2};  
var newObj = Object.assign({}, obj);  
newObj.a = 3;  
obj.a;  
console.log(newObj)
console.log(obj)
//With the advent of ES6, this can also be done using the spread operator.
var newObj = {...obj};


/* Object.keys */
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};
console.log(Object.keys(object1)); // expected [ 'a', 'b', 'c' ]


/* Object.assign( */
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
Object.assign(target, source);
console.log(target) // expected output: Object { a: 1, b: 4, c: 5 }


/* Object.create */
const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};
const me = Object.create(person); // or new Object
console.log(me);
me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten
me.printIntroduction(); // expected output: "My name is Matthew. Am I human? true"