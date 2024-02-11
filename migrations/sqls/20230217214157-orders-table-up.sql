/* Replace with your SQL commands */
CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    order_name VARCHAR(100),
    quantity integer,
    status VARCHAR(50),
    user_id integer NOT NULL,
    FOREIGN KEY user_id REFERENCES users (user_id)
);