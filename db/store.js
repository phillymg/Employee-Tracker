const connection = require('../config/connection');

class Store {
    constructor(param) {
        this.storeConnection = param;
    }

    viewDepartments() {
        return this.storeConnection.promise().query('SELECT * FROM department')
    }

    // this.storeConnection.promise()
}

module.exports = new Store(connection)