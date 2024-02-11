import express, { Request, Response } from 'express'
import { Product,ProductStore } from '../models/product'

//create new object for product model.
const productModel=new ProductStore()

//display all products.
export const index = async (_req: Request, res: Response) => {
  const products = await productModel.index()
  res.json(products)
}

//display a specific product with detecting id.
export const show = async (req: Request, res: Response) => {
   const prod = await productModel.show(req.params.id)
   res.json(prod)
}

//add a new product.
export const create = async (req: Request, res: Response) => {
    try {
        const newProduct = await productModel.create(req.body)
        res.json(newProduct)
    } catch(err) {
        res.status(400)
        res.json(err)
    }
}

//modify an existing product.
export const update=async (req:Request,res:Response)=>{
    const updated =await productModel.update(req.body)
    res.json(updated)
}

//delete an existing product.
export const destroy = async (req: Request, res: Response) => {
    const deleted = await productModel.delete(req.body.id)
    res.json(deleted)
}

