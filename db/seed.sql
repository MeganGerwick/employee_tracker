INSERT INTO department (name) 
VALUES 
('Sales'),
('Finance'),
('Customer Service'),
('Manufacturing')
;

INSERT INTO role (title, salary, department)
VALUES 
('Sales Lead', 60000, 'Sales'),
('Sales person', 40000, 'Sales'),
('Accountant', 70000, 'Finance'),
('Engineer', 80000, 'Manufacturing'),
('Software Developer', 80000, 'Manufacturing'),
('Customer service rep', 40000, 'Customer Service')
;

INSERT INTO employee (employee_id, first_name, last_name, role)
VALUES
(23456, 'Samantha', 'Smith', 'Engineer'),
(30487, 'Amir', 'Cole', 'Sales Lead'),
(15762, 'Jason', 'Delarber', 'Customer service rep'),
(345672, 'Sally', 'Ride', 'Software Developer'),
(785462, 'Callie', 'Black', 'Accountant'),
(845276, 'Thomas', 'Kincade', 'Sales person')
;