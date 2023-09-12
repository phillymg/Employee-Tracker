const connection = require('../config/connection');


class Store {
    constructor(param) {
        this.storeConnection = param;
    }

    viewDepartments() {
        return this.storeConnection.promise().query('SELECT * FROM department')
    }
    viewRoles() {
        return this.storeConnection.promise().query('SELECT * FROM role')
    }
    viewEmployees() {
        return this.storeConnection.promise().query('SELECT * FROM employee')
    }
    addDepartment(departmentName) {
        return this.storeConnection.promise().query('INSERT INTO department (name) VALUES (?)', [departmentName])
    }
    addRole(roleData) {
        return this.storeConnection.promise().query(`INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`, [roleData.title, roleData.salary, roleData.department_id])

    }
    addEmployee(employData) {
        return this.storeConnection.promise().query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`, [employData.first_name, employData.last_name, employData.role_id, employData.manager_id])
    }
}


module.exports = new Store(connection)