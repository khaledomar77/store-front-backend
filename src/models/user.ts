import {client} from "../database"
import bcrypt from 'bcrypt'
import {generateToken}  from "../auth/auth"

//define salt and pepper for hashing password.
const pepper=process.env.BCRYPT_PASSWORD as string
const saltRounds=process.env.SALT_ROUNDS as string

//create a type User.
export type User={
    id?: number,
    first_name: string,
    last_name: string,
    username: string,
    password?: string
}

//create a connection and CRUD class for users.
export class UserModel{
    async index(): Promise<User[]> {
        try {
          const conn = await client.connect()
          const sql = 'SELECT (id,first_name,last_name,username) FROM users'
    
          const result = await conn.query(sql)
    
          conn.release()
    
          return result.rows
        } catch (err) {
          throw new Error(`Could not get users. Error: ${err}`)
        }
      }
    
      async show(id: string): Promise<User> {
        try {
        const sql = 'SELECT (id,first_name,last_name,username) FROM users WHERE id=($1)'
        const conn = await client.connect()
    
        const result = await conn.query(sql, [id])
    
        conn.release()
    
        return result.rows[0]
        } catch (err) {
            throw new Error(`Couldn't find user ${id}. Error: ${err}`)
        }
      }
    
      async create(u: User): Promise<string> {
          try {
        const sql = 'INSERT INTO users (first_name,last_name,username, password) VALUES($1, $2) RETURNING id,first_name,last_name,username'
  
        const conn = await client.connect()
    
        const hashPassword: string = bcrypt.hashSync(
          u.password + pepper,
          parseInt(saltRounds)
        )
        const result = await conn
            .query(sql, [u.first_name,u.last_name,u.username, hashPassword])
    
        const user = result.rows[0]
        const userId:number=user.id
        const token:string=generateToken(userId)
        conn.release()
    
        return token
          } catch (err) {
              throw new Error(`Could not add new user ${u.username}. Error: ${err}`)
          }
      }
    
      async delete(id: string): Promise<User> {
          try {
        const sql = 'DELETE FROM users WHERE id=($1)'
        
        const conn = await client.connect()
    
        const result = await conn.query(sql, [id])
    
        const user = result.rows[0]
    
        conn.release()
    
        return user
          } catch (err) {
              throw new Error(`Could not delete user ${id}. Error: ${err}`)
          }
      }

    async authenticate(username: string, password: string): Promise<User | null> {
        const conn = await client.connect()
        const sql = 'SELECT password FROM users WHERE username=($1)'
        const result = await conn.query(sql, [username])

        if(result.rows.length){
            const user=result.rows[0]
            if(bcrypt.compareSync(password+pepper,user.password)){
                return user
            }
        }
        return null
    }
}