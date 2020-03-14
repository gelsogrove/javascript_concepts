var regex = /hello/;
var str = 'hello world';
var result = regex.test(str);
console.log(result);
// returns true



var regex = /^(.{3}\.){3}.{3}$/;
console.log(regex.test('123.456.abc.def'));
// true
console.log(regex.test('1243.446.abc.def'));
// false
console.log(regex.test('abc.def.ghi.jkl'));
// true