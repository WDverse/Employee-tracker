const mysql = require('mysql2');
const inquirer = require('inquirer');
const connection = require('./connection');

const db = mysql.createConnection(connection);

