const Employee = require('../lib/Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super();

    this.github = github;
  }

  getRole() {
    return this.role = 'Engineer';
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;