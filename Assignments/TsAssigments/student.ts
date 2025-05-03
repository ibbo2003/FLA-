type Student = {
    name: string;
    marks: number;
};

const students: Student[] = [
    { name: "Alice", marks: 75 },
    { name: "Bob", marks: 45 },
    { name: "Charlie", marks: 65 },
    { name: "David", marks: 85 },
];

const filteredStudents: Student[] = students.filter((s: Student) => s.marks >= 60);

const averageMarks: number =
    filteredStudents.reduce((sum: number, student: Student) => sum + student.marks, 0) / filteredStudents.length;

console.log("Original Students:", students);
console.log("Filtered Students:", filteredStudents);
console.log("Average Marks of Filtered Students:", averageMarks);