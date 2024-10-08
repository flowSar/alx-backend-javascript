const getStudentsByLocation = (studentList, city) => {
  if (!Array.isArray(studentList)) {
    return [];
  }
  return studentList.filter((student) => {
    if (student.location === city) {
      return true;
    }
    return false;
  });
};
export default getStudentsByLocation;
