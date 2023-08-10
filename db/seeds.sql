INSERT INTO department (id, name)
VALUES
    (1,"Engineering"),
    (2,"Sales"),
    (3,"Finance"),
    (4,"Legal");


INSERT INTO role (id, title, salary, department_id)
VALUES
    (1,"Lead Engineer", 300000, 1),
    (2,"Sales Lead", 100000, 2),
    (3,"Account Manager", 160000, 3),
    (4,"Lawyer", 190000, 4),
    (5,"Software Engineer", 200000, 1),
    (6,"Legal Team Lead", 250000, 4),
    (7,"Sales Person", 80000, 2),
    (8,"Accountant", 125000, 3);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (1,"John", "Doe", 1, NULL),
    (2,"Mike", "Chan", 5, 1),
    (3,"Philip", "Gbeho",6, NULL),
    (4,"Sara", "Poppin", 4, 3),
    (5,"Tom", "Allen", 2, NULL),
    (6,"Josh", "Grey", 7, 5),
    (7,"Walter", "Whyte", 3, NULL),
    (8,"Tom", "Brown", 8, 7);
    