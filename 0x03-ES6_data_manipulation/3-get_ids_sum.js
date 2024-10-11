const getStudentIdsSum = (studentsList) => studentsList.reduce((sum, student) => sum + student.id, 0);

export default getStudentIdsSum;
