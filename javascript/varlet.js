var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // → 6

var b = [];
for (var i = 0; i < 10; i++) {
    b[i] = function () {
        console.log(i);
    };
}
b[0](); // → 10
b[1](); // → 10
b[2](); // → 10
// ... and so on, all will log 10