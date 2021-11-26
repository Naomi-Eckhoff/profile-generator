const inquirer = require('inquirer');
const Employee = require('../lib/Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  getRole() {
    return this.role = 'Manager';
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  managerInquirer() {
    inquirer
      .prompt({
        type: 'text',
        name: 'officeNumber',
        message: "Please enter the manager's office number"
      })
      .then(({ officeNumber }) => {
        this.officeNumber = officeNumber;
      });
  }

  //add to html stuff
  //bounce back to Employee.roleChoice()
}

module.exports = Manager;