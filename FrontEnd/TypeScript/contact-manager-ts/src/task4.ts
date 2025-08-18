// Arrow function to calculate factorial
const factorial = (n: number): number => {
    let result: number = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
};


console.log("Factorial of 5:", factorial(5));  
console.log("Factorial of 0:", factorial(0));  
