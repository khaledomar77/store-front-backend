/* Replace with your SQL commands */
CREATE TABLE order_products(
    id SERIAL PRIMARY KEY,
    order_id integer REFERENCES orders (order_id),
    product_id integer REFERENCES products (product_id)
);