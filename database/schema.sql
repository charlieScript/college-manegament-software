use cms;

DROP TABLE admin;

CREATE TABLE IF NOT EXISTS admin (
  admin_id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS department (
  deptartment_id VARCHAR(255) PRIMARY KEY,
  department_name VARCHAR(255) UNIQUE NOT NULL,
  faculty_id VARCHAR(255),
  FOREIGN KEY(faculty_id) REFERENCES faculty(faculty_id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS faculty (
  faculty_id VARCHAR(255) PRIMARY KEY,
  faculty_name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS student (
  student_id VARCHAR(255) PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  gender ENUM('M', 'F'),
  date_of_birth DATE,
  email VARCHAR(100),
  `password` VARCHAR(20),
  `level` INT(3),
  joining_date DATE,
  deptartment_id VARCHAR(255),
  faculty_id VARCHAR(255),
  FOREIGN KEY(deptartment_id) REFERENCES department(deptartment_id) ON DELETE SET NULL,
  FOREIGN KEY(faculty_id) REFERENCES faculty(faculty_id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS level (
  level_id INT AUTO_INCREMENT PRIMARY KEY,
  level_name INT(3),
  student_id VARCHAR(255),
  FOREIGN KEY(student_id) REFERENCES student(student_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS staff (
  staff_id VARCHAR(20) PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  gender ENUM('M', 'F'),
  date_of_birth DATE,
  email VARCHAR(100),
  `password` VARCHAR(20),
  deptartment_id VARCHAR(255),
  faculty_id VARCHAR(255),
  FOREIGN KEY(deptartment_id) REFERENCES department(deptartment_id) ON DELETE SET NULL,
  FOREIGN KEY(faculty_id) REFERENCES faculty(faculty_id) ON DELETE SET NULL
);

INSERT INTO admin (first_name, last_name, email, password)
VALUES (
    'charles',
    'onedibe',
    'gozione3@gmail.com',
    '$2a$10$kFyPx01E3NCDAdKKfTbgYeEoKKkgz3sT9UmTgxZ1xBXCxU/6XDOKy'
  );


SELECT email, password FROM admin WHERE email = 'gozione3gmail.com';