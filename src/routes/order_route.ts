import { Router } from "express"
import * as orderHandlers from '../handlers/orders'
import { authToken } from "../middleware/auth_middleware"

//create orders router.
const ordersRouter=Router()

//define orders routes.
ordersRouter.get('/orders',authToken,orderHandlers.index)
ordersRouter.get('/orders',authToken,orderHandlers.show)
ordersRouter.post('/orders',authToken,orderHandlers.create)
ordersRouter.put('/orders/:id',authToken,orderHandlers.update)
ordersRouter.delete('/orders/:id',authToken,orderHandlers.destroy)

export default ordersRouter