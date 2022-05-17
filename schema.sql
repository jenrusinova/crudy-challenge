CREATE DATABASE crudy_db;

USE crudy_db;

CREATE TABLE product (
productId int AUTO_INCREMENT,
name varchar(20),
description varchar(100),
quantity int,
PRIMARY KEY (productId)
);

CREATE TABLE deletedProduct (
productId int AUTO_INCREMENT,
name varchar(20),
description varchar(100),
quantity int,
user varchar (100),
comment varchar (256),
time datetime,
PRIMARY KEY (productId)
);