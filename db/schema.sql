DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
   item_id INTEGER (4) NOT NULL AUTO_INCREMENT,
   burger_name VARCHAR (30) NOT NULL,
   devoured BOOLEAN DEFAULT true,
	PRIMARY KEY (item_id) 
);

SELECT * FROM burgers;
