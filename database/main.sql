CREATE TABLE order(
    id varchar(16) NOT NULL,
    order_no NUMBER AUTO_INCREMENT,
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
    FOREIGN KEY(order_id) REFERENCES order(id),
    FOREIGN KEY(item_id) REFERENCES item(id)
);