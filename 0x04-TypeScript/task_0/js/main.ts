interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
};

let student1: Student = {
  firstName: 'samwel',
  lastName: 'aboki',
  age: 48,
  location: 'Nairobi'
};

let student2: Student = {
  firstName: 'john',
  lastName: 'Doe',
  age: 35,
  location: 'kisumu'
};

let studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');
  const firstNameCell: HTMLTableCellElement = document.createElement('td');
  const locationCell: HTMLTableCellElement = document.createElement('td');

  firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);