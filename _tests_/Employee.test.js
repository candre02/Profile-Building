
const Employee = require('../lib/Employee.js');



test('creates an employee object', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object');
})

test('gets the name of the employee from created object', () => {
    const name = "Sophie";
    const employee = new Employee(name, '1', 'SSA@aol.com');

    expect(employee.getName()).toBe('Sophie');
})

test('gets the id of the employee from created object through the getId() function', () => {
    const id = '28';
    const employee = new Employee('Sophie', id, 'SAA@aol.com');

    expect(employee.getId()).toBe('28');
})

test('gets the email of the employee from created object through the getEmail() function', () => {
    const email = 'SAA@aol.com';
    const employee = new Employee('Sophie', '28', email);

    expect(employee.getEmail()).toBe('SAA@aol.com');
})

test('should return the name of the class "Employee" from the getRole() function', () => {
    const employee = new Employee('Sophie', '28', 'SAA@aol.com');

    expect(employee.getRole()).toBe('Employee');
})

