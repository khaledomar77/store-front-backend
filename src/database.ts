import dotenv from 'dotenv'
import { Pool } from 'pg'

//configure database settings.
dotenv.config()
const {
    ENV,
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_TEST_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    SALT_ROUNDS,
    BCRYPT_PASSWORD,
    TOKEN_SECRET,
} = process.env 

//create a new pool.
export const client = new Pool({
    host: POSTGRES_HOST,
    database: (ENV=='dev')?POSTGRES_DB:POSTGRES_TEST_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
})

export default{
    host: POSTGRES_HOST,
    database: (ENV=='dev')?POSTGRES_DB:POSTGRES_TEST_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    tokenSecret: TOKEN_SECRET,
    saltRounds: SALT_ROUNDS,
    pepper: BCRYPT_PASSWORD
}