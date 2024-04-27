-- Users table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Recipes table
CREATE TABLE recipes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    picture LONGTEXT,
    preparation_time INT NOT NULL,
    posted_at DATE NOT NULL,
    servings INT NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Ingredients table
CREATE TABLE ingredients (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    recipe_id INT,
    FOREIGN KEY (recipe_id) REFERENCES recipes(id)
);

-- Steps table
CREATE TABLE steps (
    id INT PRIMARY KEY AUTO_INCREMENT,
    step_text TEXT NOT NULL,
    recipe_id INT,
    FOREIGN KEY (recipe_id) REFERENCES recipes(id)
);

-- Rating table
CREATE TABLE rating (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    recipe_id INT,
    rating INT CHECK (rating >= 1 AND rating <= 10),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (recipe_id) REFERENCES recipes(id)
);

-- Newsletter table
CREATE TABLE newsletter (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);


-- Inserting data into users table
INSERT INTO users (first_name, last_name, email, password) VALUES
('amel', 'karsic', 'amelkarsic@gmail.com', '$2y$10$148OfdKKLUGeXBfFYHdiW.QFv6e07HAzKe1Axh8yRrdSR.Lf9AegO');


-- Inserting data into recipes, ingredients, and steps tables
INSERT INTO recipes (id, name, picture, preparation_time, posted_at, servings, user_id) VALUES
(1, 'Burek - pie with meat', 'img/bg-img/sr1.jpg', 75, '2023-04-05', 10, 1),
(2, 'Hadzijski cevap', 'img/bg-img/sr2.jpg', 45, '2023-05-05', 3, 1),
(3, 'Japrak', 'img/bg-img/sr3.jpg', 25, '2024-04-05', 11, 1);

-- Inserting data into ingredients table
INSERT INTO ingredients (name, recipe_id) VALUES
('Brasno', 1),
('Meso', 1),
('Ulje', 1),
('Teletina', 2),
('Paprike', 2),
('Patlidzan', 2),
('Vinova Loza', 3),
('Riza', 3),
('Meso', 3);

-- Inserting data into steps table
INSERT INTO steps (step_text, recipe_id) VALUES
('Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum', 1),
('Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum', 1),
('Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum', 1),
('Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum', 1),
('Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum', 2),
('Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum', 2),
('Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum', 2),
('Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum', 2),
('Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum', 3),
('Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum', 3),
('Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum', 3),
('Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum', 3);
