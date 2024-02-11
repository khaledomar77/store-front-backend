import express,{Request,Response} from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import productRouter from './routes/product_route'
import userRoutes from './routes/user_route'
import ordersRouter from './routes/order_route'

//create an express application.
const app=express()

//define the server port.
const port=3000 || process.env.PORT

//create the main router.
app.get('/',(req:Request,res:Response)=>{
   res.send('welcome to the main page.')
})

app.use(bodyParser.json())
app.use(cors())
app.use(productRouter)
app.use(userRoutes)
app.use(ordersRouter)

//running app on http//:localhost:3000
app.listen(port,()=>{
   console.log(`server running at port ${port}`)
})

export default app