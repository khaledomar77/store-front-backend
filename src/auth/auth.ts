//import json web token (jwt).
import jwt from 'jsonwebtoken'

//generate the jwt token
export const generateToken=(id: number)=>{
    return jwt.sign(id.toString(),process.env.TOKEN_SECRET as string)
}