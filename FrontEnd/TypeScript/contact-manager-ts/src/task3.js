// Function with optional parameter
function calculateArea(length, width) {
    if (width !== undefined) {
        return length * width; // Rectangle
    }
    else {
        return length * length; // Square
    }
}
// Test the function
console.log("Area of square (5):", calculateArea(5)); // 25
console.log("Area of rectangle (5, 10):", calculateArea(5, 10)); // 50
