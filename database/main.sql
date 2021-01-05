CREATE DATABASE restaurant;
USE restaurant;
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