// imported employee file
const Employee = require('../lib/Employee.js');


// created test for employee object
test('creates an employee object', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object');
})

// created test for employees name
test('gets the name of the employee from created object', () => {
    const name = "Sophie";
    const employee = new Employee(name, '1', 'SSA@aol.com');

    expect(employee.getName()).toBe('Sophie');
})

// created test for employees id
test('gets the id of the employee from created object through the getId() function', () => {
    const id = '28';
    const employee = new Employee('Sophie', id, 'SAA@aol.com');

    expect(employee.getId()).toBe('28');
})

// created test for employees email
test('gets the email of the employee from created object through the getEmail() function', () => {
    const email = 'SAA@aol.com';
    const employee = new Employee('Sophie', '28', email);

    expect(employee.getEmail()).toBe('SAA@aol.com');
})

// created test for employees role
test('should return the name of the class "Employee" from the getRole() function', () => {
    const employee = new Employee('Sophie', '28', 'SAA@aol.com');

    expect(employee.getRole()).toBe('Employee');
})

