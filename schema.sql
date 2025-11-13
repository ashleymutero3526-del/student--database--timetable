CREATE DATABASE IF NOT EXISTS campus_crud;
USE campus_crud;

DROP TABLE IF EXISTS timetable;

CREATE TABLE timetable (
  id INT AUTO_INCREMENT PRIMARY KEY,
  course_code VARCHAR(20) NOT NULL,
  course_name VARCHAR(150) NOT NULL,
  day VARCHAR(20),
  start_time TIME,
  end_time TIME,
  location VARCHAR(100),
  goal VARCHAR(255),
  credits INT DEFAULT 3,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO timetable (course_code, course_name, day, start_time, end_time, location, goal, credits) VALUES
('ICT101', 'Introduction to Programming', 'Monday', '08:00:00', '09:30:00', 'Room A1', 'Understand basics of programming', 3),
('MTH110', 'Calculus I', 'Tuesday', '10:00:00', '11:30:00', 'Room B3', 'Master derivatives', 4),
('PHY120', 'Physics: Mechanics', 'Wednesday', '09:00:00', '10:30:00', 'Lab 2', 'Perform lab experiments', 3),
('ENG101', 'Academic Writing', 'Thursday', '13:00:00', '14:30:00', 'Room C4', 'Write coherent essays', 2),
('ICT251', 'Web Application Development', 'Friday', '11:00:00', '12:30:00', 'Computer Lab', 'Build CRUD apps', 4),
('BIO101', 'Intro Biology', 'Monday', '14:00:00', '15:30:00', 'Room D1', 'Know cell structure', 3),
('HIS105', 'World History', 'Tuesday', '15:00:00', '16:30:00', 'Room E2', 'Understand major events', 2),
('CHEM101', 'General Chemistry', 'Wednesday', '08:00:00', '09:30:00', 'Lab 1', 'Learn basic reactions', 3),
('PSY100', 'Intro Psychology', 'Thursday', '10:00:00', '11:30:00', 'Room F3', 'Study behavior basics', 2),
('ICT220', 'Database Systems', 'Friday', '14:00:00', '15:30:00', 'Room G5', 'Design relational schemas', 4);
