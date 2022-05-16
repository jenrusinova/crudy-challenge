CREATE DATABASE crudy_db;

USE crudy_db;

CREATE TABLE product (
productId int AUTO_INCREMENT,
name varchar(20) UNIQUE,
description varchar(100),
quantity int,
PRIMARY KEY (productId)
);