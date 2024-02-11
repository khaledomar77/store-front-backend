import client from '../database'

//create a type Product.
export type Product = {
     product_id?: number;
     product_name: string;
     price: number;
     description: string;
}

//create a connection and CRUD class for products model.
export class ProductStore {
  async index(): Promise<Product[]> {
    try {
      // @ts-ignore
      const conn = await client.connect()
      const sql = 'SELECT * FROM products'

      const result = await conn.query(sql)

      conn.release()

      return result.rows 
    } catch (err) {
      throw new Error(`Could not get products. Error: ${err}`)
    }
  }

  async show(id: string): Promise<Product> {
    try {
    const sql = 'SELECT * FROM products WHERE product_id=($1)'
    // @ts-ignore
    const conn = await Client.connect()

    const result = await conn.query(sql, [id])

    conn.release()

    return result.rows[0]
    } catch (err) {
        throw new Error(`Could not find book ${id}. Error: ${err}`)
    }
  }

  async create(p: Product): Promise<Product> {
      try {
    const sql = 'INSERT INTO products ( product_name, price, description) VALUES($1, $2, $3) RETURNING *'
    // @ts-ignore
    const conn = await Client.connect()

    const result = await conn
        .query(sql, [p.product_name, p.price, p.description])

    const product = result.rows[0]

    conn.release()

    return product
      } catch (err) {
          throw new Error(`Could not add new product ${p.product_name}. Error: ${err}`)
      }
  }

  async update(p: Product): Promise<Product> {
    try {
  const sql = 'UPDATE products SET product_name=$2, price=$3, description=$4 WHERE product_id=$1 RETURNING *'
  // @ts-ignore
  const conn = await Client.connect()

  const result = await conn
      .query(sql, [p.product_id,p.product_name,p.price,p.description])

  const product = result.rows[0]

  conn.release()

  return product
    } catch (err) {
        throw new Error(`Could not modify the product ${p.product_name}. Error: ${err}`)
    }
}

  async delete(id: string): Promise<Product> {
      try {
    const sql = 'DELETE FROM products WHERE id=($1)'
    // @ts-ignore
    const conn = await Client.connect()

    const result = await conn.query(sql, [id])

    const product = result.rows[0]

    conn.release()

    return product
      } catch (err) {
          throw new Error(`Could not delete product ${id}. Error: ${err}`)
      }
  }
}