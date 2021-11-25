const Intern = require('../lib/Intern.js');
const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee.js');

test('create an Intern object', () => {
    const intern = new Intern();

    expect(typeof(intern)).toBe('object');
})

test('gets the name of the intern from created object through the getName() function', () => {
    const name = 'Theo';
    const intern = new Intern(name, '22', 'TSA@yahoo.com', 'UT');

    expect(intern.getName()).toBe('Theo');
})

test('gets the id of the intern from created object through the getId() function', () => {
    const id = '22';
    const intern = new Intern('Theo', id, 'TSA@yahoo.com', 'UT');

    expect(intern.getId()).toBe('22');
})

test('gets the email of the intern from created object through the getEmail() function', () => {
    const email = 'TSA@yahoo.com';
    const intern = new Intern('Theo', '22', email, 'UT');

    expect(intern.getEmail()).toBe('TSA@yahoo.com');
})

test('get the school of the intern from created object through the getSchool() function', () => {
    const school = 'UT';
    const intern = new Intern('Theo', '22', 'TSA@yahoo.com', school);

    expect(intern.getSchool()).toBe('UT');
})

test('should return the name of the class Intern" from the getRole() function', () => {
    const intern = new Intern('Theo', '22', 'TSA@yahoo.com', 'UT');

    expect(intern.getRole()).toBe('Intern');
})