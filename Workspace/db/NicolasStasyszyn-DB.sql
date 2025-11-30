CREATE DATABASE IF NOT EXISTS Portafolio;
USE Portafolio;

CREATE TABLE IF NOT EXISTS usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS trabajo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    titulo VARCHAR(150) NOT NULL,
    descripcion TEXT,
    fecha_publicacion DATE,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

INSERT INTO usuario (nombre, email, password_hash)
VALUES ('aadmin', 'admin@test.com', 'admin');
