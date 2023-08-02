SELECT *
FROM department;

SELECT *
FROM role
JOIN department ON role.department_id = department.id;


SELECT *
FROM employee
JOIN role ON employee.role_id = role.id;

INSERT INTO department

INSERT INTO role

INSERT INTO employee

UPDATE employee
SET role_id = 
