const inquirer = require('inquirer');
const store = require('./db/store')

mainMenu();

function mainMenu() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Which of the following queries do you want to run?',
                choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
            },
        ])
        .then((data) => {
            switch (data.action) {
                case 'View all departments':
                    viewDepartments();

                    break;
                case 'View all roles':
                    viewRoles();

                    break;
                case 'View all employees':
                    viewEmployees();

                    break;
                case 'Add a department':
                    addDepartment();

                    break;
                case 'Add a role':
                    addRole();

                    break;
                case 'Add an employee':
                    addEmployee();

                    break;
                case 'Update an employee role':
                    updateEmployRole();

                    break;
                default:
                    break;
            }
        })
};

function viewDepartments() {
    store.viewDepartments().then(([res]) => {
        console.table(res);
    }).then(() => {
        mainMenu();
    });
};

function viewRoles() {
    store.viewRoles().then(([res]) => {
        console.table(res);
    }).then(() => {
        mainMenu();
    });
};
function viewEmployees() {
    store.viewEmployees().then(([res]) => {
        console.table(res);
    }).then(() => {
        mainMenu();
    });
};
function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the new department name:'
        },
    ])
        .then((newDepartment) => {
            return store.addDepartment(newDepartment.name);
        })
        .then(() => {
            console.log('Added department successfully.');
        })
        .catch((error) => {
            console.error('Adding department error:', error);
        })
        .then(() => {
            mainMenu();
        });
}

function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the new title name:'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary:'
        },
        {
            type: 'input',
            name: 'departmentID',
            message: 'Enter the department id:'
        }
    ])
        .then((newRole) => {
            return store.addRole(newRole.title, newRole.salary, newRole.departmentID);
        })
        .then(() => {
            console.log('Added role successfully.');
        })
        .catch((error) => {
            console.error('Adding role error:', error);
        })
        .then(() => {
            mainMenu();
        });
};


function addEmployee() {
    console.log('addEmployee')
    mainMenu();
};
function updateEmployRole() {
    console.log('updateEmployRole')
    mainMenu();
};