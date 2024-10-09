const updateStudentGradeByCity = (StudentList, city, newGrades) => {
  return StudentList.filter((student) => student.location === city).map(
    (student) => {
      const studentGrade = newGrades.find(
        (stu) => stu.studentId === student.id
      );
      if (studentGrade) {
        student.grade = studentGrade.grade;
      } else {
        student.grade = 'N/A';
      }
      return student;
    }
  );
};

export default updateStudentGradeByCity;
