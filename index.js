const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');

const answers = {
  name: 'name',
  id: 'id',
  email: 'email',
  role: 'role'
};

function managerInquirer() {
  inquirer
    .prompt({
      type: 'input',
      name: 'name',
      message: "Please enter the manager's name"
    })
    .then(({ name }) => {
      answers.name = name;
      answers.role = 'Manager';
      sharedInquirer()
    });
}

function nonManagerInquirer() {
  inquirer
    .prompt({
      type: 'input',
      name: 'name',
      message: "Please enter the employee's name"
    })
    .then(({ name }) => {
      answers.name = name;
      sharedInquirer();
    });
}

function sharedInquirer() {
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
      answers.id = id;
      answers.email = email;
      roleSplitter();
    });
}

function roleSplitter() {
  if (answers.role === 'Manager') {
    new Manager(answers.name, answers.id, answers.email).managerInquirer();
  }
  if (answers.role === 'Engineer') {
    new Engineer(answers.name, answers.id, answers.email).engineerInquirer();
  }
  if (answers.role === 'Intern') {
    new Intern(answers.name, answers.id, answers.email).internInquirer();
  }
}

function roleChoice() {
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

      answers.role = role;

      nonManagerInquirer();
    });
}

const writeToFile = content => {
  //adds dist folder if it doesn't exist
  if (!fs.existsSync('./dist')) {
    fs.mkdirSync('./dist');
  }

  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/page.html', content, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created'
      });
    });
  });
};



managerInquirer();