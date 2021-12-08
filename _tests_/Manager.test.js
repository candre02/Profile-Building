// import manager file
const Manager = require('../lib/Manager.js');



// created test for manager object
test('create an Manager object', () => {
    const manager = new Manager();

    expect(typeof(manager)).toBe('object');
})

// created test for managers name
test('gets the name of the team manager from created object through the getName() function', () => {
    const name = 'Jack';
    const manager = new Manager(name, '56', 'JCB@google.com', '512-888-4321');

    expect(manager.getName()).toBe('Jack');
})

// created test for managers id
test('gets the id of the team manager from created object through the getId() function', () => {
    const id = '56';
    const manager = new Manager('Jack', id, 'JCB@google.com', '512-888-4321');

    expect(manager.getId()).toBe('56');
})

// created test for managers email
test('gets the email of the manager from created object through the getEmail() function', () => {
    const email = 'JCB@google.com';
    const manager = new Manager('Jack', '56', email, '512-888-4321');
    
    expect(manager.getEmail()).toBe('JCB@google.com');
})

// created test for managers officenumber
test('get the office number of the manager from created object through the getofficeNumber() function', () => {
    const officeNumber = '512-888-4321';
    const manager = new Manager('Jack', '56', 'JCB@google.com', officeNumber);
    console.log(manager.getOfficeNumber())
    expect(manager.getOfficeNumber()).toBe('512-888-4321');
})

// created test for the managers role
test('should return the name of the class "Manager" from the getRole() function', () => {
    const manager = new Manager('Jack', '56', 'JCB@google.com', '512-888-4321');

    expect(manager.getRole()).toBe('Manager');
})


