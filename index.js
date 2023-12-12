const inquirer = require('inquirer');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "employees_db"
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to database!');

    beginPrompt();
})

function beginPrompt() {
    inquirer
        .prompt({
            type: 'list',
            message: 'What would you like to do?',
            name: 'direct',
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role"
            ]
        })
        .then((answers) => {
            switch (answers.direct) {
                case "View all departments":
                    viewDepartments();
                    break;
                case "View all roles":
                    viewRoles();
                    break;
                case "View all employees":
                    viewEmployees();
                    break;
                case "Add a department":
                    addDepartment();
                    break;
                case "Add a role":
                    addRole();
                    break;
                case "Add an employee":
                    addEmployee();
                    break;
                case "Update an employee role":
                    updateEmployeeRole();
                    break;
            };
        });
};

function viewDepartments() {
    const action = "SELECT * FROM department";
    connection.query(action, (err, res) => {
        if (err) throw err;
        console.table(res)

        beginPrompt();
    });
};

function viewRoles() {
    const action = "SELECT * FROM role";
    connection.query(action, (err, res) => {
        if (err) throw err;
        console.table(res);

        beginPrompt();
    });
};

function viewEmployees() {
    const action = "SELECT * FROM employee";
    connection.query(action, (err, res) => {
        if (err) throw err;
        console.table(res);

        beginPrompt();
    });
};

function addDepartment() {
    inquirer
        .prompt({
            name: 'department',
            type: 'input',
            message: 'What is the name of the department?'
        })
        .then((answers) => {
            const action = `INSERT INTO department (name) VALUES ("${answers.department}")`;
            connection.query(action, (err, res) => {
                if (err) throw err;
                console.table(res)

                beginPrompt();
            });
        });
};

function addRole() {
    inquirer
        .prompt(
            {
                name: "title",
                type: "input",
                message: "Title of new role:"
            },
            {
                name: "salary",
                type: "input",
                message: "Salary of new role:"
            },
            {
                name: "department",
                type: "input",
                message: "Enter department id number:"
            }
        )
        .then((answers) => {
            const action = "INSERT INTO role SET ?";
            connection.query(action,
                {
                    title: answers.title,
                    salary: answers.salary,
                    department: answers.department
                },
                (err, res) => {
                    if (err) throw err;
                    console.table(res);

                    beginPrompt();
                }
                );
        });
};

