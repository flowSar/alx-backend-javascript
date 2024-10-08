const getListStudentIds = (StudentList) => {
  if (!Array.isArray(StudentList)) {
    return [];
  }
  return StudentList.map((student) => student.id);
};
export default getListStudentIds;
