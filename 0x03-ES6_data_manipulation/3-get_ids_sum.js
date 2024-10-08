const getStudentIdsSum = (Studentslist) => {
  let sum = 0;
  Studentslist.map((student) => (sum += student.id));
  return sum;
};

export default getStudentIdsSum;
