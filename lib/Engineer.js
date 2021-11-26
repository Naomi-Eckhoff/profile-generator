const inquirer = require('inquirer');
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

  engineerInquirer() {
    inquirer
      .prompt({
        type: 'text',
        name: 'github',
        message: "Please enter the engineer's github"
      })
      .then(({ github }) => {
        this.github = github;
      });
  }

  //add to html stuff
  //bounce back to Employee.roleChoice()
}

module.exports = Engineer;