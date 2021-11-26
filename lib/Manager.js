const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const pageTemplate = require('../src/page-template');
const Index = require('../index');


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

  managerInquirer(callback) {
    this.getRole();
    inquirer
      .prompt({
        type: 'text',
        name: 'officeNumber',
        message: "Please enter the manager's office number"
      })
      .then(({ officeNumber }) => {
        this.officeNumber = officeNumber;
      })
      .then(() => {
        pageTemplate(this);
      });
  }
}

module.exports = Manager;