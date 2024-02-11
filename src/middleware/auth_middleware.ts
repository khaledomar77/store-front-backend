import jwt from 'jsonwebtoken'
import { Request,Response,NextFunction } from 'express'

//generate token for users middleware.
export const authToken=(req:Request,res:Response,next:NextFunction)=>{
    try {
        const authorizationHeader = req.headers.authorization as string 
        const token = authorizationHeader.split(' ')[1]
        jwt.verify(token, process.env.TOKEN_SECRET as string)
    } catch(err) {
        res.status(401)
        res.json('Access denied, invalid token')
    }
    next()
}