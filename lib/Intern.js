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
}

module.exports = Intern;