// Function to return grade based on marks
function getGrade(marks: number): string {
    if (marks >= 90 && marks <= 100) {
        return "A";
    } else if (marks >= 75 && marks <= 89) {
        return "B";
    } else if (marks >= 50 && marks <= 74) {
        return "C";
    } else if (marks < 50 && marks >= 0) {
        return "F";
    } else {
        return "Invalid marks"; // for negative or >100
    }
}


console.log("Marks: 95 → Grade:", getGrade(95));   
console.log("Marks: 80 → Grade:", getGrade(80));   
console.log("Marks: 60 → Grade:", getGrade(60));   
console.log("Marks: 40 → Grade:", getGrade(40));   
console.log("Marks: 110 → Grade:", getGrade(110)); 
