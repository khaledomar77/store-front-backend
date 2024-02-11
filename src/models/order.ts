import {client} from "../database";

//create a type Order.
export type Order = {
    order_id?: number;
    order_name: string;
    quantity: number;
    status: string;
    user_id: number;
}

//create connection and CRUD class for orders model.
export class OrderStore {
    async index(): Promise<Order[]> {
      try {
        const conn = await client.connect()
        const sql = 'SELECT * FROM orders'
  
        const result = await conn.query(sql)
  
        conn.release()
  
        return result.rows 
      } catch (err) {
        throw new Error(`Could not get orders. Error: ${err}`)
      }
    }
  
    async show(order_id: string): Promise<Order> {
      try {
      const sql = 'SELECT * FROM orders WHERE order_id=($1)'
      
      const conn = await client.connect()
  
      const result = await conn.query(sql, [order_id])
  
      conn.release()
  
      return result.rows[0]
      } catch (err) {
          throw new Error(`Could not find order ${order_id}. Error: ${err}`)
      }
    }
  
    async create(o: Order): Promise<Order> {
        try {
      const sql = 'INSERT INTO orders (order_name, quantity, status, user_id) VALUES($1, $2, $3, $4) RETURNING *'
      
      const conn = await client.connect()
  
      const result = await conn
          .query(sql, [o.order_name,o.quantity,o.status,o.user_id])
  
      const order = result.rows[0]
  
      conn.release()
  
      return order
        } catch (err) {
            throw new Error(`Could not add new order ${o.order_name}. Error: ${err}`)
        }
    }
  
    async update(o: Order): Promise<Order> {
        try {
      const sql = 'UPDATE orders SET order_name=$2, quantity=$3, status=$4, user_id=$5 WHERE id=$1 RETURNING *'
      // @ts-ignore
      const conn = await Client.connect()
    
      const result = await conn
          .query(sql, [o.order_id,o.order_name,o.quantity,o.status,o.user_id])
    
      const product = result.rows[0]
    
      conn.release()
    
      return product
        } catch (err) {
            throw new Error(`Could not modify the product ${o.order_name}. Error: ${err}`)
        }
    }

    async delete(id: string): Promise<Order> {
        try {
      const sql = 'DELETE FROM orders WHERE order_id=($1)'

      const conn = await client.connect()
  
      const result = await conn.query(sql, [id])
  
      const order = result.rows[0]
  
      conn.release()
  
      return order
        } catch (err) {
            throw new Error(`Could not delete order ${id}. Error: ${err}`)
        }
    }
  }