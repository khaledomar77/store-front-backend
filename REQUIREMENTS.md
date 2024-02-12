## API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

### API Endpoints
#### Products

    Index: 'products/' [GET]
    Show: 'products/:id' [GET]
    Create (args: Product)[token required]: 'products/' [POST] (token)
    Update: 'products/:id' [PUT]
    Delete: 'products/:id  [DELETE]

#### Users

    Index [token required]: 'users/' [GET] (token)
    Show [token required]: 'users/:id' [GET] (token)
    Create (args: User)[token required]: 'users/' [POST] (token)
    Delete [token required]: 'users/:id' [DELETE] (token)

#### Orders

    Index [token required]: 'orders/:user_id' [GET] (token)
    Show [token required]: 'orders/current/:user_id' [GET] (token)
    Create [token required]: 'orders' [POST] (token)
    Update order's data [token required]: 'orders/:id' [PUT] (token)
    Delete [token required]: 'orders/:id [DELETE] (token)

### Database schema

    
 #### Product:


* product_id [OPTIONAL] 
* product_name
* price
* description

TABLE: products(
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(100),
    price NUMERIC,
    description text
);

#### User:

* id
* firstname
* lastname
* username
* password

Table: users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    username VARCHAR(100),
    password VARCHAR
);

#### Orders:

    id of each product in the order
    quantity of each product in the order
    user_id
    status of order (active or complete)

Table: orders(
    order_id SERIAL PRIMARY KEY,
    order_name VARCHAR(100),
    quantity integer,
    status VARCHAR(50),
    user_id integer NOT NULL,
    FOREIGN KEY user_id REFERENCES users (user_id)
);

#### Table: order_products:

    order_id INTEGER REFERENCES orders(id)
    product_id INTEGER REFERENCES products(id)
    quantity INTEGER

Table: Order Product (
  order_id: integer(not null) REFERENCES orders (id),
  product_id: integer(not null) REFERENCES products (id),
  quantity: integer(not null)
)
