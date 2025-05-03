const students = [
    { name: "Alice", marks: 75 },
    { name: "Bob", marks: 45 },
    { name: "Charlie", marks: 65 },
    { name: "David", marks: 85 },
];
const filteredStudent = students.filter(s => s.marks>=60);

const averageMarks = filteredStudent.reduce((sum, student) => sum + student.marks,0)/filteredStudent.length;

console.log("Original Students:", students);
console.log("Filtered Students:", filteredStudent);
console.log("Average Marks of Filtered Student:", averageMarks);
