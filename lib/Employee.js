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
        type: 'text',
        name: 'name',
        message: "Please enter the manager's name"
      })
      .then(({ name }) => {
        this.name = name;
      });

    this.role = 'Manager';

    this.sharedInquirer();
  }

  nonManagerInquirer() {
    inquirer
      .prompt({
        type: 'text',
        name: 'name',
        message: "Please enter the employee's name"
      })
      .then(({ name }) => {
        this.name = name;
      });

    this.sharedInquirer();
  }

  sharedInquirer() {
    inquirer
      .prompt({
        type: 'text',
        name: 'id',
        message: 'Please enter their id'
      },
        {
          type: 'text',
          name: 'email',
          message: 'Please enter their email'
        })
      .then(({ id, email }) => {
        this.id = id;
        this.email = email;
      });

    if (this.role === 'Manager') {
      //jump to manager js
    }
    if (role === 'Engineer') {
      // jump to engineer js
    }
    if (role === 'Intern') {
      // jump to engineer js
    }

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



  htmlWrite() {

  }
}

module.exports = Employee;