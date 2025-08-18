// Arrow function to calculate factorial
var factorial = function (n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
};
console.log("Factorial of 5:", factorial(5));
console.log("Factorial of 0:", factorial(0));
