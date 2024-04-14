-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
DB name: tri-force-shopping-list


CREATE TABLE "shop" (
	"id" SERIAL PRIMARY KEY,
	"item" varchar(80) NOT NULL,
	"quantity" FLOAT NOT NULL,
	"unit" varchar(20) NOT NULL,
	"isPurchased" BOOLEAN DEFAULT FALSE
);


INSERT INTO "shop" (item, quantity, unit)
VALUES
  ('Milk', '2', 'liters'),
  ('Bread', '1', 'loaf'),
  ('Eggs', '1', 'dozen'),
  ('Chicken', '500', 'grams'),
  ('Rice', '2', 'kilograms'),
  ('Tomatoes', '5', 'pieces'),
  ('Apples', '6', 'pieces'),
  ('Potatoes', '3', 'kilograms');
