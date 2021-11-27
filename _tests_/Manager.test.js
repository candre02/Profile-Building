const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');


jest.mock('../lib/Employee.js');

test('create an Manager object', () => {
    const manager = new Manager();

    expect(typeof(manager)).toBe('object');
})

test('gets the name of the team manager from created object through the getName() function', () => {
    const name = 'Jack';
    const manager = new Manager(name, '56', 'JCB@google.com', '512-888-4321');

    expect(manager.getName()).toBe('Jack');
})

test('gets the id of the team manager from created object through the getId() function', () => {
    const id = '56';
    const manager = new Manager('Jack', id, 'JCB@google.com', '512-888-4321');

    expect(manager.getId()).toBe('56');
})

test('gets the email of the manager from created object through the getEmail() function', () => {
    const email = 'JCB@google.com';
    const manager = new Manager('Jack', '56', email, '512-888-4321');

    expect(manager.getEmail()).toBe('candre02.2@gmail.com');
})

test('get the office number of the manager from created object through the getOfficeNumber() function', () => {
    const phone = '512-888-4321';
    const manager = new Manager('Crystal', '02', 'candre02.2@gmail.com', phone);

    expect(manager.getOfficeNumbder()).toBe('512-888-4321');
})

test('should return the name of the class "Manager" from the getRole() function', () => {
    const manager = new Manager('Crystal', '02', 'candre02.2@gmail.com', '512-888-4321');

    expect(maanager.getRole()).toBe('Manager');
})


