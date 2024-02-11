import { Request, Response } from 'express'
import { Order, OrderStore } from '../models/order'

//create new pool.
const orderModel = new OrderStore()

//display all orders.
export const index = async (_req: Request, res: Response) => {
  const orders = await orderModel.index()
  res.json(orders)
}

//display a specific order with id.
export const show = async (req: Request, res: Response) => {
   const ord = await orderModel.show(req.body.id)
   res.json(ord)
}

//add a new order.
export const create = async (req: Request, res: Response) => {
    try {
        const ord: Order = {
            order_name: req.body.order_name,
            quantity: req.body.quantity,
            status: req.body.status,
            user_id: req.body.user_id
        }

        const newOrder = await orderModel.create(ord)
        res.json(newOrder)
    } catch(err) {
        res.status(400)
        res.json(err)
    }
}

//modify an existing order.
export const update=async (req:Request,res:Response)=>{
    const updated =await orderModel.update(req.body)
    res.json(updated)
}

//delete an order.
export const destroy = async (req: Request, res: Response) => {
    const deleted = await orderModel.delete(req.body.id)
    res.json(deleted)
}