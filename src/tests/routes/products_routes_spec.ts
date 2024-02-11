import productRoutes from "../../routes/product_route"
import supertest from "supertest"

const request=supertest(productRoutes)

//testing the products routes.
describe('test the products endpoints', ()=>{
    it('should return OK response',async()=>{
       const response= await request.get('/products')
       console.log(`API status code:${response.statusCode}`)
    })

    it('should return OK response',async () => {
        const response=await request.get('/products/1')
        console.log(`API status code:${response.statusCode}`)
    })

    it('should return OK response',async () => {
        const response=await request.post('/products')
        console.log(`API status code:${response.statusCode}`)
    })
    
    it('should return OK response',async () => {
        const response=await request.put('/products/1')
        console.log(`API status code:${response.statusCode}`)
    })

    it('should return OK response',async () => {
        const response=await request.delete('/products/1')
        console.log(`API status code:${response.statusCode}`)
    })
})
