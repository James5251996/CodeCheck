
Create table "user" (
	"id" serial primary key,
	"username" varchar (80) unique not null,
	"password" varchar (1000) not null
);




CREATE TABLE "questions" (
	"id" SERIAL PRIMARY KEY,
	"question" varchar (10000) Not null,
	"difficulty" varchar (50) not null,
	"solution" varchar (10000) not null
	);