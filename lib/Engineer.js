// creates the functions to pass the tests for the github username and verifies the role
const Employee = require('../lib/Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, username) {
        super(name, id, email);
        this.username = username;
    }

    getGithub() {
        return this.username;
    }

    getRole() {
        let engineer = new Engineer('Crystal', '02', 'candre02.2@gmail.com');
        return engineer.constructor.name;
        // return "Engineer";
    }
}

module.exports = Engineer;