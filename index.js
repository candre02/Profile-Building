//
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

const inquirer = require("inquirer");
const fs = require("fs");

let profileArr = [];

// prompt the user to enter the manager info and calls the function to ask if they would like to add another employee
const getInfo = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please eneter the manager's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's employee ID?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter manager's employee ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email address?",
            validate: (emailInput) => {
                var format = /\S+@\S+\.\S+/;
                valid = format.test(emailInput);
                if (valid) {
                    return true;
                } else {
                    console.log("\n" + "Please enter the manager's email and make sure it's in the correct format.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'phone',
            message: "What is the team manager's phone number? (ex 512-888-4321)",
            validate: (phoneInput) => {
                var format = /\S+-\S+\-\S+/;
                valid = format.test(phoneInput)
                if (valid) {
                    return true;
                } else {
                    console.log("\n" + "Please eneter manager's phone number.");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add another team member to finish building the team?',
            default: false,
        }
    ])
        .then(response => {
            // creates a new manager object
            const manager = new Manager(response.name, response.id, response.email, response.phone);
            profileArr.push(manager);

            let role = "Manager";
            addEmployee(manager, role);

            if (response.addEmployee) {
                addTeamMem();
            } else {
                console.log("Team is Finished!");
                finalHTML();
            }
        })
}

// Asks if the user would like too add an intern or engineer then calls the appropriate function
const addTeamMem = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addEmployee',
            message: 'Would you like to add an engineer or intern to finish building the team?',
            choices: [
                "Add an engineer",
                "Add an intern",
            ],
        }

    ])
        .then(response => {
            if (response.addEmployee === "Add an engineer") {
                engineerQuestion();
            } else {
                internQuestion();
            }

        })

    // Asks the user for the engineer info and the calls the function to add that info to the html page 
    const engineerQuestion = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's name.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's employee ID?",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's employee ID.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email address?",
                validate: emailInput => {
                    var format = /\S+@\S+\.\S+/;
                    valid = format.test(emailInput)
                    if (valid) {
                        return true;
                    } else {
                        console.log("\n" + "Please eneter the engineer's email and make sure it's in the correct format.");
                        return false;
                    }
                }

            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's github username?",
                validate: github => {
                    if (github) {
                        return true;
                    } else {
                        console.log("Please eneter the engineer's Github username.");
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'addEmployee',
                message: "Would you like to add another team member to finish building the team?",
            }
        ])
            .then(response => {
                // creates a new engineer object
                const engineer = new Engineer(response.name, response.id, response.email, response.github);
                profileArr.push(engineer);
                console.log(profileArr);

                let role = "Engineer";
                addEmployee(engineer, role);

                if (response.addEmployee) {
                    addTeamMem();
                } else {
                    console.log("Your team is complete!")
                    finalHTML();
                }
            })

    }

    // Asks the user for the intern info and then calls the function to add that info to the html page
    const internQuestion = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the intern's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's name.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the intern's employee ID?",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please eneter the intern's employee ID.")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email address?",
                validate: emailInput => {
                    var format = /\S+@\S+\.\S+/;
                    valid = format.test(emailInput)
                    if (valid) {
                        return true;
                    } else {
                        console.log("\n" + "Please eneter the intern's email and make sre it's in the correct format.")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the intern's school?",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please eneter the intern's school or put 'no school' if they are not in school.");
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'addEmployee',
                message: "Would you like to add another team member to finish building the team?",
            }
        ])
            .then(response => {
                // creates a new intern object
                const intern = new Intern(response.name, response.id, response.email, response.school);
                profileArr.push(intern);
                console.log(profileArr);

                let role = "Intern";
                addEmployee(intern, role);

                if (response.addEmployee) {
                    addTeamMem();
                } else {
                    console.log("Team is finsihed!");
                    finalHTML();
                }
            })
    }

    // this function creates the initial html before adding the employee info
    function initialHTML() {
        const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" constent="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    </head>
    <body>
    <nav class="navbar bg-danger m-5">
        <span class="mb-4 mt-4 h2 w-100 text-light text-center">Team</span>
    </nav>
    <div class="container">
        <div class="row">`;
        fs.writeFile("./dist/team.html", html, function (err) {
            if (err) {
                console.log(err);
            }
        });
        console.log("Starter HTML created");
    }

    // this function determines if the employee is a manager, engineer, or intern and then adds the appropriate info to the html 
    const addEmployee = (info, role) => {
        return new Promise(function (response, reject) {
            let newTemplate = '';
            const name = info.getName();
            const id = info.getId();
            const email = info.getEmail();
            if (role === 'Manager') {
                const phone = info.officeNumber();
                newTemplate = `<div class="col-4">
                <div class="card mx-auto mb-4 shadow" style="width: 20rem">
                    <div class="card-header bg-primary text-light">
                        <h2 class="card-title">${name}</h2>
                        <h3 class="card-title"><!--this is a briefcase emoji-->&#128188; Manager</h3>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group-item">Phone Number: ${phone}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
            } else if (role === 'Engineer') {
                const github = info.getGithub();
                newTemplate = `<div class="col-4">
                <div class="card mx-auto mb-4 shadow" style="width: 20rem">
                    <div class="card-header bg-primary text-light">
                        <h2 class="card-title">${name}</h2>
                        <h3 class="card-title"><!-- This is an laptop emoji -->&#128187; Engineer</h3>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group-item">Github: <a href="http://github.com/${github}">${github}</a></li>
                        </ul>
                    </div>
                </div>
            </div>`;
            } else if (role === 'Intern') {
                const school = info.getSchool();
                newTemplate = `<div class="col-4">
                <div class="card mx-auto mb-4 shadow" style="width: 20rem">
                    <div class="card-header bg-primary text-light">
                        <h2 class="card-title">${name}</h2>
                        <h3 class="card-title"><!-- This is a graduation cap emoji-->&#127891; Intern</h3>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group-item">School: ${school}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
            }
            fs.appendFile("./dist/team.html", newTemplate, function (err) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve({
                    ok: true,
                    message: 'Team member added!'
                })
            })
        })
    }

    // adds the final html after the employee cards
    // jquery and bootstrap js
    const finalHTML = () => {
        const html = `</div>
        </div>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </body>
    </html>`;

        fs.appendFile("./dist/team.html", html, function (err) {
            if (err) {
                console.log(err);
            };
        });
        console.log("HTML Created!");
    }

    // these two functions get everything started 
    initialHTML();
    getInfo();
}