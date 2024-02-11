import ordersRouter from "../../routes/order_route"
import supertest from "supertest"

const request=supertest(ordersRouter)

//testing the orders routes.
describe('test the orders endpoints', ()=>{
    it('should return OK response',async()=>{
       const response= await request.get('/orders')
       console.log(`API status code:${response.statusCode}`)
    })

    it('should return OK response',async () => {
        const response=await request.get('/orders/1')
        console.log(`API status code:${response.statusCode}`)
    })

    it('should return OK response',async () => {
        const response=await request.post('/orders')
        console.log(`API status code:${response.statusCode}`)
    })
    
    it('should return OK response',async () => {
        const response=await request.put('/orders/1')
        console.log(`API status code:${response.statusCode}`)
    })

    it('should return OK response',async () => {
        const response=await request.delete('/orders/1')
        console.log(`API status code:${response.statusCode}`)
    })
})