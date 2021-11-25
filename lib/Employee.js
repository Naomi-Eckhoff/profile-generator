const inquirer = require('inquirer');

const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

class Employee {
  constructor() {
    this.name;
    this.id;
    this.email;
  }

  getName() {
    inquirer
      .prompt({
        type: 'text',
        name: 'name',
        message: "Please enter the employee's name"
      })
  }

  getId() {
    inquirer
      .prompt({
        type: 'text',
        name: 'id',
        message: 'Please enter their id'
      });
  }

  getEmail() {
    inquirer
      .prompt({
        type: 'text',
        name: 'email',
        message: 'Please enter their email'
      });
  }

  getRole()
}


// inquirer name id email office number for manager input
// inquirer list end or add engineer/intern
// inquirer engineer’s name, ID, email, and GitHub username back to menu
// inquirer intern’s name, ID, email, and school then back to menu
// generate html when select from list finish
