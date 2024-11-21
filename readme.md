CREATE DATABASE ecommerce;

USE ecommerce;

-- Tabela de Produtos
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    in_stock BOOLEAN NOT NULL DEFAULT TRUE,
    brand VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    color VARCHAR(50) NOT NULL,
    image1 VARCHAR(255) NOT NULL,
    image2 VARCHAR(255),
    image3 VARCHAR(255),
    image4 VARCHAR(255),
    image5 VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Carrinho
CREATE TABLE cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

