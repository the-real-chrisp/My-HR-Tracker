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
        });
};