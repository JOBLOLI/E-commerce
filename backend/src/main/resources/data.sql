INSERT INTO users (username, password, email, role) VALUES
                                                        ('john_doe', 'password123', 'john@example.com', 'CUSTOMER'),
                                                        ('jane_doe', 'password456', 'jane@example.com', 'CUSTOMER'),
                                                        ('admin', 'adminpass', 'admin@example.com', 'ADMIN');

INSERT INTO orders (user_id, status, date) VALUES
                                               (1, 'DELIVERED', '2026-01-15'),
                                               (1, 'PROCESSING', '2026-03-10'),
                                               (2, 'SHIPPED', '2026-02-20');