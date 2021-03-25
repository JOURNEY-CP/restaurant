-- CREATE DATABASE restaurant;
-- USE restaurant;
CREATE TABLE item (
    id VARCHAR(16) NOT NULL,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(5,2) NOT NULL,
    description TEXT,
    PRIMARY KEY(id)
);

CREATE TABLE item_feedback (
    id VARCHAR(16) NOT NULL,
    item_id VARCHAR(16) NOT NULL,
    rating INT,
    feedback TEXT,
    PRIMARY KEY(id),
    CHECK(rating>=0 AND rating<=5),
    FOREIGN KEY(item_id) REFERENCES item(id)
);
CREATE TABLE order_meta(
    id VARCHAR(16) NOT NULL,
    order_no INT,
    table_no INT NOT NULL,
    customer_name VARCHAR(20) NOT NULL,
    customer_mobile VARCHAR(16) NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);
CREATE TABLE order_item(
    order_id VARCHAR(16) NOT NULL,
    item_id VARCHAR(255) NOT NULL,
    quantity INT DEFAULT 1,
    PRIMARY KEY(order_id,item_id),
    FOREIGN KEY(order_id) REFERENCES order_meta(id),
    FOREIGN KEY(item_id) REFERENCES item(id)
);

