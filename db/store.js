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
    addRole(roleTitle) {
        return this.storeConnection.promise().query('INSERT INTO role (title) VALUES (?)', [roleTitle])

    }
}


module.exports = new Store(connection)