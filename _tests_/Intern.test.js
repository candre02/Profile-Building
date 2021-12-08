// imported intern file
const Intern = require('../lib/Intern.js');



// created test for intern object
test('create an Intern object', () => {
    const intern = new Intern();

    expect(typeof(intern)).toBe('object');
})

// created test for interns name
test('gets the name of the intern from created object through the getName() function', () => {
    const name = 'Theo';
    const intern = new Intern(name, '22', 'TSA@yahoo.com', 'UT');

    expect(intern.getName()).toBe('Theo');
})

// created test for interns id
test('gets the id of the intern from created object through the getId() function', () => {
    const id = '22';
    const intern = new Intern('Theo', id, 'TSA@yahoo.com', 'UT');

    expect(intern.getId()).toBe('22');
})

// created test for interns email
test('gets the email of the intern from created object through the getEmail() function', () => {
    const email = 'TSA@yahoo.com';
    const intern = new Intern('Theo', '22', email, 'UT');

    expect(intern.getEmail()).toBe('TSA@yahoo.com');
})

// created test for interns school
test('get the school of the intern from created object through the getSchool() function', () => {
    const school = 'UT';
    const intern = new Intern('Theo', '22', 'TSA@yahoo.com', school);

    expect(intern.getSchool()).toBe('UT');
})

// created test for interns role
test('should return the name of the class Intern" from the getRole() function', () => {
    const intern = new Intern('Theo', '22', 'TSA@yahoo.com', 'UT');

    expect(intern.getRole()).toBe('Intern');
})