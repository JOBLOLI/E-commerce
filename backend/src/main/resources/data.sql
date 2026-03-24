INSERT INTO users (username, password, first_name, last_name, email, role) VALUES
                                                                               ('john_doe', 'password123', 'John', 'Doe', 'john@example.com', 'CUSTOMER'),
                                                                               ('jane_doe', 'password456', 'Jane', 'Doe', 'jane@example.com', 'CUSTOMER'),
                                                                               ('admin', 'adminpass', 'Admin', 'User', 'admin@example.com', 'ADMIN');

INSERT INTO categories (name, description) VALUES
                                               ('Electronics', 'Gadgets and electronic devices'),
                                               ('Clothing', 'Apparel and accessories'),
                                               ('Books', 'Physical and digital books');

INSERT INTO products (name, description, price, image, category_id, review) VALUES
                                                                                ('Wireless Headphones', 'Noise cancelling over-ear headphones', 79.99, 'headphones.jpg', 1, 'Great sound quality!'),
                                                                                ('Mechanical Keyboard', 'RGB backlit mechanical keyboard', 49.99, 'keyboard.jpg', 1, 'Very satisfying to type on.'),
                                                                                ('Men T-Shirt', '100% cotton basic t-shirt', 19.99, 'tshirt.jpg', 2, 'Comfortable and fits well.'),
                                                                                ('Java Programming Book', 'Learn Java from scratch', 34.99, 'javabook.jpg', 3, 'Very beginner friendly.');

INSERT INTO orders (user_id, status, date) VALUES
                                               (1, 'DELIVERED', '2026-01-15'),
                                               (1, 'PROCESSING', '2026-03-10'),
                                               (2, 'SHIPPED', '2026-02-20');

INSERT INTO order_items (order_id, product_id, quantity, price) VALUES
                                                                    (1, 1, 1, 79.99),
                                                                    (1, 3, 2, 19.99),
                                                                    (2, 2, 1, 49.99),
                                                                    (3, 4, 1, 34.99);

INSERT INTO order_history (order_id, user_id, item_name, price) VALUES
                                                                    (1, 1, 'Wireless Headphones', 79.99),
                                                                    (1, 1, 'Men T-Shirt', 19.99),
                                                                    (2, 1, 'Mechanical Keyboard', 49.99),
                                                                    (3, 2, 'Java Programming Book', 34.99);