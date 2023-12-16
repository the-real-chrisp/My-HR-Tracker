INSERT INTO department (name)
VALUES  ('IT'),
        ('Engineering'),
        ('Human Resources'),
        ('Management');

INSERT INTO role (title, salary, department_id)
VALUES  ('IT Support Associate', 80000, 1),
        ('Manager: Engineering', 180000, 4),
        ('Mechanical Engineer', 120000, 2),
        ('HR Business Partner', 115000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Richard', 'Song', 1, 1),
        ('Pak', 'M', 2, 2),
        ('Jarett', 'DeSanti', 3, 3),
        ('Chris', 'Purcell', 4, 4);