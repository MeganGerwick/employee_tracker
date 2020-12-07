INSERT INTO department (name) 
VALUES 
('Sales'),
('Finance'),
('Customer Service'),
('Manufacturing')
;

INSERT INTO role (title, salary)
VALUES 
('Sales Lead', 60000),
('Sales person', 40000),
('Accountant', 70000),
('Engineer', 80000),
('Software Developer', 80000),
('Customer service rep', 40000)
;

INSERT INTO employee (id, first_name, last_name, role)
VALUES
(23456, 'Samantha', 'Smith', 'Engineer'),
(30487, 'Amir', 'Cole', 'Sales Lead'),
(15762, 'Jason', 'Delarber', 'Customer service rep'),
(345672, 'Sally', 'Ride', 'Software Developer'),
(785462, 'Callie', 'Black', 'Accountant'),
(845276, 'Thomas', 'Kincade', 'Sales person')
;