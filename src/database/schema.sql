CREATE DATABASE myproducts;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS categories (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  product_name VARCHAR NOT NULL UNIQUE,
  quantity VARCHAR,
  price VARCHAR,
  category_id UUID,
  FOREIGN KEY(category_id) REFERENCES categories(id)

  user_id UUID,
  FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS users (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  username VARCHAR UNIQUE NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  password VARCHAR NOT NULL
);

CREATE TABLE cart (
id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
id_pdt INT (15),
quant_buy INT (200)
);

ALTER TABLE Clientes
ADD FOREIGN KEY (FKCarrinho)
REFERENCES Carrinho (id_carrinho);

ALTER TABLE Carrinho
ADD FOREIGN KEY (FKProduto)
REFERENCES Produto (id_pdt);
