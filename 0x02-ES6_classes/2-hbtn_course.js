export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('name must be a String');
    if (typeof length !== 'number') throw TypeError('length must be a Number');
    if (!Array.isArray(students)) throw TypeError('students must be an Array');

    for (const lst of students) {
      if (typeof lst !== 'string') { throw TypeError('students must contain strings'); }
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return `${this._name}`;
  }

  set name(newName) {
    if (typeof newName !== 'string') throw TypeError('name must be a String');
    this._name = newName;
  }

  get length() {
    return `${this._length}`;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') throw TypeError('length must be a Number');
    this._length = newLength;
  }

  get students() {
    return `${this._students}`;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) throw TypeError('students must be an Array');
    for (const lst of newStudents) {
      if (typeof lst !== 'string') { throw TypeError('students must contain strings'); }
    }
    this._students = newStudents;
  }
}
