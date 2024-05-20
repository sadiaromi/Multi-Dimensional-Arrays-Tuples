// ================ Multi-Dimentional-Array /Nested-Array =================
//----------------------------STEP# 1 ----------------------------
//-------------------------STEP# 2 -------------------------------
var students = [
    {
        name: "Rabia",
        grades: [70, 45, 80, 65],
    },
    {
        name: "Iqra",
        grades: [70, 90, 50, 64],
    },
    {
        name: "Saba",
        grades: [60, 90, 80, 75],
    },
];
//-----------------------------STEP# 3 ----------------------------
// Implementing a function that calculates students grades
function calculateAverageGrade(student) {
    var totalGrades = student.grades.reduce(function (sum, grade) { return sum + grade; }, 0);
    return totalGrades / student.grades.length;
}
//-----------------------------STEP# 4 --------------------------------
// displaying each student name and grade
students.forEach(function (students) {
    var averageGrade = calculateAverageGrade(students);
    console.log("".concat(students.name, "\n      Average Grade = ").concat(averageGrade));
});
