import {Request,Response} from 'express'
import { User,UserModel } from '../models/user'
import jwt from 'jsonwebtoken'

//create a new object of user model.
const userModel = new UserModel()

//display all users.
export const index = async (_req: Request, res: Response) => {
  const users = await userModel.index()
  res.json(users)
}

//display only one user with a specific id.
export const show = async (req: Request, res: Response) => {
   const u = await userModel.show(req.body.id)
   res.json(u)
}

//add a new user.
export const create = async (req: Request, res: Response) => {
    try {
        const user: User = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            password: req.body.password,
        }

        const newUser = await userModel.create(user)
        res.json(newUser)
    } catch(err) {
        res.status(400)
        res.json(err)
    }
}

//delete a user.
export const destroy = async (req: Request, res: Response) => {
    const deleted = await userModel.delete(req.body.id)
    res.json(deleted)
}

//authenticate logging user.
export const authenticate = async (req: Request, res: Response) => {
    const user: User = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      password: req.body.password,
    }
    try {
        const u = await userModel.authenticate(user.username, user.password as string)
        var token = jwt.sign({ user: u }, process.env.TOKEN_SECRET as string);
        res.json(token)
    } catch(error) {
        res.status(401)
        res.json({ error })
    }
  }