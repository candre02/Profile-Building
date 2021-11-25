// creates the functions to pass the tests for the office phone number and verifies the role
const Employee = require('..lib/Employee.js');

class Manager extends Employee {
    constructor(name, id, email, number) {
        super(name, id, email);
        this.number = number;
    }

    getPhone() {
        return this.number;
    }

    getRole() {
        let manager = new Manager('Jack', '56', 'JCB@google.com');
        //return "Manager";
        return manager.constructor.name;
    }
}

module.exports = Manager;
