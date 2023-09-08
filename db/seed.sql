USE employees_db;

INSERT INTO department (name)
VALUES ("Marketing"),
       ("Engineering"),
       ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("Marketing VP", 150000, 1),
       ("Marketing Associate", 149000, 1),
       ("Engineering Director", 140000, 2),
       ("Engineer", 120000, 2),
       ("Sales VP", 100000, 3),
       ("Sales Associate", 50000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Deb", "Onair", 1, NULL),
       ("Anita", "Hero", 2, 1),
       ("Kate", "Forna", 3, NULL),
       ("Ralph", "Alpha", 4, 3),
       ("Terra", "Bell", 5, NULL),
       ("Anna", "Stikk", 6, 5);