INSERT INTO users
(username, password, email, first_name, last_name, address, join_date, role, status)
VALUES
    ('john_doe', 'password123', 'john@example.com', 'John', 'Doe', '123 Main St', '2024-01-15', 'CUSTOMER', 'ACTIVE'),
    ('jane_doe', 'password456', 'jane@example.com', 'Jane', 'Doe', '456 Elm St', '2024-02-20', 'CUSTOMER', 'ACTIVE'),
    ('admin', 'adminpass', 'admin@example.com', 'Admin', 'User', '789 Admin Ave', '2023-12-01', 'ADMIN', 'ACTIVE');

INSERT INTO categories (name, description) VALUES
    ('Electronics', 'Gadgets and electronic devices'),
    ('Clothing', 'Apparel and accessories'),
    ('Books', 'Physical and digital books');


INSERT INTO products (name, description, price, rating, image_url) VALUES
    ('Wireless Headphones', 'Noise cancelling over-ear headphones', 79.99, 4.5, 'assets/images/headphones.jpg'),
    ('Mechanical Keyboard', 'RGB backlit mechanical keyboard', 49.99, 4.6, 'assets/images/keyboard.jpg'),
    ('Men T-Shirt', '100% cotton basic t-shirt', 19.99, 4.2, 'assets/images/tshirt.jpg'),
    ('Java Programming Book', 'Learn Java from scratch', 34.99, 4.8, 'assets/images/javabook.jpg');


INSERT INTO product_category (product_id, category_id) VALUES
    (1, 1),  -- Wireless Headphones -> Electronics
    (2, 1),  -- Mechanical Keyboard -> Electronics
    (3, 2),  -- Men T-Shirt -> Clothing
    (4, 3);  -- Java Programming Book -> Books
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
