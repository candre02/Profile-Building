// imported engineer file
const Engineer = require('../lib/Engineer.js');




// created test for engineer object
test('creates an engineer object', () => {
    const engineer = new Engineer();

    expect(typeof(engineer)).toBe('object');
})

// created test for engineers name
test('gets the name of the engineer from created object through the getName() function', () => {
    const name = 'Crystal';
    const engineer = new Engineer(name, '02', 'candre02.2@gmail.com');

    expect(engineer.getName()).toBe('Crystal');
})

// created test for engineers id
test('gets the id of the engineer from created object through the getId() function', () => {
    const id = '02';
    const engineer = new Engineer('Crystal', id, 'candre02.2@gmail.com');

    expect(engineer.getId()).toBe('02');
})

// created test for engineers email
test('gets the email of the engineer from created object through the getEmail() function', () => {
    const email = 'candre02.2@gmail.com';
    const engineer = new Engineer('Crystal', '02', email);

    expect(engineer.getEmail()).toBe('candre02.2@gmail.com');
})

// created test for engineers github username
test('get the github of the engineer from created object through the getGithub() function', () => {
    const github = 'candre02';
    const engineer = new Engineer('Crystal', '02', 'candre02.2@gmail.com', github);

    expect(engineer.getGithub()).toBe('candre02');
})

// created test for engineers role
test('should return the name of the class "Engineer" from the getRole() function', () => {
    const engineer = new Engineer('Crystal', '02', 'candre02.2@gmail.com', 'candre02');

    expect(engineer.getRole()).toBe('Engineer');
})