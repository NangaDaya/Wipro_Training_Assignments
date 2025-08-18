// Variable Declarations in TypeScript

// string
let personName: string = "Daya";

// number
const age: number = 22;

// boolean
let isStudent: boolean = true;

// any (can hold any type)
let randomValue: any = "Hello";
randomValue = 42; // valid since it's `any`

// using var (not recommended in modern TS/JS, but works)
var city: string = "Hyderabad";

// Print all variables
console.log("Name:", personName);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Random Value:", randomValue);
console.log("City:", city);
