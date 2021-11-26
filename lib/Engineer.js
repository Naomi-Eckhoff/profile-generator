const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const pageTemplate = require('../src/page-template');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github;
  }

  getRole() {
    return this.role = 'Engineer';
  }

  getGithub() {
    return this.github;
  }

  engineerInquirer() {
    this.getRole();
    inquirer
      .prompt({
        type: 'text',
        name: 'github',
        message: "Please enter the engineer's github"
      })
      .then(({ github }) => {
        this.github = github;
        return this;
      });
  }

  //add to html stuff
  //bounce back to Employee.roleChoice()
}

module.exports = Engineer;