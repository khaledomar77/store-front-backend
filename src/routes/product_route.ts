import { Router } from 'express'
import * as handlers from '../handlers/products'
import { authToken } from '../middleware/auth_middleware'

//create products router.
const productRouter=Router()

//define products routes.
productRouter.get('/products', handlers.index)
productRouter.get('/products/:id', handlers.show)
productRouter.post('/products',authToken, handlers.create)
productRouter.put('/products/:id',handlers.update)
productRouter.delete('/products/:id', handlers.destroy)
  
export default productRouter