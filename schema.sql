CREATE TABLE student (
  id    SERIAL PRIMARY KEY,
  name  TEXT NOT NULL
);

CREATE TABLE module (
  id SERIAL PRIMARY KEY,
  student_id INT REFERENCES student(id),
  name  TEXT NOT NULL,
  coeff INT NOT NULL DEFAULT 1
);

CREATE TABLE subject (
  id SERIAL PRIMARY KEY,
  module_id INT REFERENCES module(id),
  name TEXT NOT NULL,
  coeff INT NOT NULL DEFAULT 1
);

CREATE TABLE eval_group (
  id SERIAL PRIMARY KEY,
  subject_id INT REFERENCES subject(id),
  name TEXT NOT NULL,
  coeff INT NOT NULL DEFAULT 1
);

CREATE TABLE grade (
  id SERIAL PRIMARY KEY,
  eval_group_id INT REFERENCES eval_group(id),
  name TEXT NOT NULL,
  coeff INT NOT NULL DEFAULT 1
);

