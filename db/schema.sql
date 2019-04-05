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

INSERT INTO burgers (burger_name, devoured) VALUES ("Big Mac", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("Jalapeno Cheddar Burger", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("Bacon Swiss Burger", false );
INSERT INTO burgers (burger_name, devoured) VALUES ("Teriyaki Pineapple Burger", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("Chili Cheese Burger", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("Garden Veggie Burger", false);