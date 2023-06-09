-- --create database 
-- create database psbarberMysql

-- --using database
use psbarberMysql

--create table
create table usuarios(
    id int(11) UNSINGNED  AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(80) not null,
    documento int(20) not null,
    telefono VARCHAR(11) NOT NULL,
    email VARCHAR(50)NOT NULL,
    contraseña varchar(15) NOT NULL,
    estado: boolean()
);
INSERT INTO usuarios (`id`,`nombre`,`documento`,`telefono`,`email`, `estado`) VALUES (null,'carlos','10000','330404', 'carlos@gmail.com', 1);
-- read table 
SHOW TABLES;

-- to describe tables 
describe usuarios;