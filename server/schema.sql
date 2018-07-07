CREATE DATABASE chat;

USE chat;


/* Create other tables and define schemas for them here! */

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE roomname (
  id INT NOT NULL AUTO_INCREMENT,
  roomname VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  objectId INT NOT NULL AUTO_INCREMENT,
  text VARCHAR(280),
  roomname_id int NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (objectId),
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (roomname_id) REFERENCES roomname(id)
);

insert into roomname (roomname) values ('Hack Reactor');
insert into user (username) values ('JOYCE');
insert into messages (text, roomname_id, user_id) values ('bu gen gah',1, 1);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

