var myArr = [1, 2, 4, 5];
myArr[3] = 10;
// myArr = [78]
console.log(myArr);
myArr.filter(function (el) {
    return el % 2 == 0;
});
console.log(myArr.filter(function (el) { return el % 2 == 0; }));
