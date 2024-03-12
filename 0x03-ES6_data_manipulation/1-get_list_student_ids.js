// eslint-disable-next-line consistent-return
export default Function getListStudentIds(array) {
  if (!Array.isArray(array)) return [];
  return array.map((student) => student.id);
}
