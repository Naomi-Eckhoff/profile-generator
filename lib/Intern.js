const inquirer = require('inquirer');
const Employee = require('../lib/Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super();

    this.school = school;
  }

  getRole() {
    return this.role = 'Intern';
  }

  getSchool() {
    return this.school;
  }

  internInquirer() {
    inquirer
      .prompt({
        type: 'text',
        name: 'school',
        message: "Please enter the intern's school"
      })
      .then(({ school }) => {
        this.school = school;
      });
  }

  //add to html stuff
  //bounce back to Employee.roleChoice()
}

module.exports = Intern;