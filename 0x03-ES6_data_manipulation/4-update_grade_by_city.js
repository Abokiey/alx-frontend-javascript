export default function updateStudentGradeByCity(array, city, newGrades) {
  return array
    .filter((student) => student.location === city)
    .map((student) => {
      const grades = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: grades ? grades.grade : 'N/A',
      };
    });
}
