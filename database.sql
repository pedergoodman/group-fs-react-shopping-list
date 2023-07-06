-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE "shop" (
	"id" SERIAL PRIMARY KEY,
	"item" varchar(80) NOT NULL,
	"quantity" FLOAT NOT NULL,
	"unit" varchar(20) NOT NULL,
	"isPurchased" BOOLEAN DEFAULT FALSE
);