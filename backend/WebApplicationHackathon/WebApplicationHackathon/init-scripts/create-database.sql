-- Contenido de 01-init-script.sql
USE DBDICSYS;
GO

-- Definición de tablas
create table Usuario (
    id_usuario int primary key identity(1,1),
    nombre varchar(50),
    dni varchar(50),
    contrasena varchar(50)
);

create table Rol (
    id_rol int primary key not null,
    nombre varchar(50)
);

create table Ingresante (
    id_ingresante int primary key identity(1,1),
    nombre varchar(50),
    edad int,
    nacionalidad varchar(50),
    correo varchar(50) unique,
    dni varchar(10) unique,
    github varchar(100),
    experiencia_it bit,
    anios_experiencia int,
    experiencia_laboral_no_it int
);

-- Datos de ejemplo
INSERT INTO Ingresante (id_ingresante, nombre, edad, nacionalidad, correo, dni, github, experiencia_it, anios_experiencia, experiencia_laboral_no_it)
VALUES
    (1, 'Alice', 25, 'USA', 'alice@example.com', '1234567890', 'https://github.com/alice', 1, 3, 0),
    -- ... (otros datos)
    (10, 'Jack', 23, 'Canada', 'jack@example.com', '9012345678', 'https://github.com/jack', 0, 0, 4);
