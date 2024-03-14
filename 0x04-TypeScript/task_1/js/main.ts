interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string
  [key: string]: any;
}


interface Directors extends Teacher {
  numberOfReports: number,
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher("John", "Doe")); // Output: J. Doe

interface studentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}
interface StudentClass {
  workOnHomework(): string,
  displayName(): string
}

const StudentClass: studentConstructor = class {
  constructor (public firstName: string, public lastName: string) {}

  workOnHomework() {
    return 'currently working';
  }

  displayName() {
    return this.firstName;
  }
}

const student = new StudentClass('John', 'Doe');
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName()); // Output: John
