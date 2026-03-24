INSERT INTO users
(username, password, email, first_name, last_name, address, join_date, role, status)
VALUES
    ('john_doe', 'password123', 'john@example.com', 'John', 'Doe', '123 Main St', '2024-01-15', 'CUSTOMER', 'ACTIVE'),
    ('jane_doe', 'password456', 'jane@example.com', 'Jane', 'Doe', '456 Elm St', '2024-02-20', 'CUSTOMER', 'ACTIVE'),
    ('admin', 'adminpass', 'admin@example.com', 'Admin', 'User', '789 Admin Ave', '2023-12-01', 'ADMIN', 'ACTIVE');

INSERT INTO orders (user_id, status, date) VALUES
                                               (1, 'DELIVERED', '2026-01-15'),
                                               (1, 'PROCESSING', '2026-03-10'),
                                               (2, 'SHIPPED', '2026-02-20');