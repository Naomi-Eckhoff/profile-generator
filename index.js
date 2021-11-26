const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

new Employee().managerInquirer();

if (Employee.getRole() === 'Manager') {
  //jump to manager js
}
if (Employee.getRole() === 'Engineer') {
  // jump to engineer js
}
if (Employee.getRole() === 'Intern') {
  // jump to engineer js
}
