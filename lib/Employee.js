const inquirer = require('inquirer');


class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    if (!this.role) {
      return this.role = 'Employee';
    } else {
      return this.role;
    }
  }

  managerInquirer() {
    inquirer
      .prompt({
        type: 'input',
        name: 'name',
        message: "Please enter the manager's name"
      })
      .then(({ name }) => {
        this.name = name;
        this.role = 'Manager';
        this.sharedInquirer()
      });
  }

  nonManagerInquirer() {
    inquirer
      .prompt({
        type: 'input',
        name: 'name',
        message: "Please enter the employee's name"
      })
      .then(({ name }) => {
        this.name = name;
        this.sharedInquirer();
      });
  }

  sharedInquirer() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'id',
          message: 'Please enter their id'
        },
        {
          type: 'input',
          name: 'email',
          message: 'Please enter their email'
        }
      ])
      .then(({ id, email }) => {
        this.id = id;
        this.email = email;
      });
  }

  roleChoice() {
    inquirer
      .prompt({
        type: 'list',
        name: 'role',
        message: 'Would you like to add another employee',
        choices: ['Engineer', 'Intern', 'Finished']
      })
      .then(({ role }) => {
        if (role === 'Finished') {
          // jump to html write
        }

        this.role = role;

        this.nonManagerInquirer();
      });
  }
}
module.exports = Employee;