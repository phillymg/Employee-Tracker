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
    console.log('viewRoles')
    mainMenu();
};
function viewEmployees() {
    console.log('viewEmployees')
    mainMenu();
};
function addDepartment() {
    console.log('addDepartment')
    mainMenu();
};
function addRole() {
    console.log('addRole')
    mainMenu();
};
function addEmployee() {
    console.log('addEmployee')
    mainMenu();
};
function updateEmployRole() {
    console.log('updateEmployRole')
    mainMenu();
};