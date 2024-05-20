// ================ Multi-Dimentional-Array /Nested-Array =================
//----------------------------STEP# 1 ----------------------------

type Student={
    name:string;
    grades:number[];
  }

  //-------------------------STEP# 2 -------------------------------
  let students:Student[]=[
    {
      name:"Rabia",
      grades:[70, 45 , 80 , 65],
    },
    {
      name:"Iqra",
      grades:[70 ,90 ,50 ,64],
    },
    {
      name:"Saba",
      grades:[60 , 90, 80 ,75],
    },
  ];

  //-----------------------------STEP# 3 ----------------------------
  
  // Implementing a function that calculates students grades
  function calculateAverageGrade(student:Student):any{
    const totalGrades =student.grades.reduce((sum,grade)=>sum+grade,0);
    return totalGrades/student.grades.length;
  }
  
  //-----------------------------STEP# 4 --------------------------------
  // displaying each student name and grade
  students.forEach((students)=>{
    let averageGrade = calculateAverageGrade(students);
    console.log(`${students.name}
      Average Grade = ${averageGrade}`
    );
  });