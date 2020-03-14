/* FIND */
var x = [3, 10, 18, 20].find((age) => {
    return age >= 18;
});
console.log(x);

/* FINDINDEX */
var y = [ 15, 22, 33, 44].findIndex((age) => {
    return age >= 18;
});
console.log(y);

/* LAST INDEX OF */
var k = [ "Banana", "Apple", "Orange", "Apple"].lastIndexOf("Apple");
console.log(k);