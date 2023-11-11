CREATE TABLE IF NOT EXISTS my_table (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

INSERT INTO my_table (name) VALUES ('Sample Data');