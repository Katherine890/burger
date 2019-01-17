DROP DATABASE if exists burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int(11) NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false, 
    createdAt TIMESTAMP,
    PRIMARY KEY (id)
);

ALTER TABLE burgers MODIFY COLUMN createdAt TIMESTAMP DEFAULT current_timestamp;