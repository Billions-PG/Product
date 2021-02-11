CREATE TABLE sellers (
  _seller_id serial PRIMARY KEY,
  name VARCHAR ( 50 ) NOT NULL,
  numSales INT NOT NULL
);

CREATE TABLE products (
  _product_id serial PRIMARY KEY,
  seller_id INT NOT NULL,
  FOREIGN KEY (seller_id)
    REFERENCES sellers (_seller_id),
  name VARCHAR (255) NOT NULL,
  description TEXT NOT NULL,
  price NUMERIC NOT NULL,
  stock INT NOT NULL,
  sizes BOOLEAN NOT NULL,
  rating NUMERIC(2,1) NOT NULL
);

CREATE TABLE photos (
  _photo_id serial PRIMARY KEY,
  product_id INT NOT NULL,
  FOREIGN KEY (product_id)
    REFERENCES products (_product_id),
  url VARCHAR (255) NOT NULL
);

CREATE INDEX photos_productId_FK_index ON photos (product_id);