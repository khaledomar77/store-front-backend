import { Router} from "express"
import * as userHandlers from '../handlers/users'
import { authToken } from "../middleware/auth_middleware"

//create user router.
const userRoutes=Router()

//define users routes.
userRoutes.post('/users',userHandlers.create)
userRoutes.delete('/users/:id',userHandlers.destroy)
userRoutes.get('/users',authToken,userHandlers.index)
userRoutes.get('/users/:id',authToken,userHandlers.show)
userRoutes.post('/users/auth',userHandlers.authenticate)

export default userRoutes