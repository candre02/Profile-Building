// creates the functions to pass the tests for the school and verifies the role
const Employee = require('../lib/Employee.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        let intern = Intern('Theo', '22', 'TSA@yahoo.com');
        return intern.constructor.name;
    }
}

module.exports = Intern;