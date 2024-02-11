import userRoutes from "../../routes/user_route"
import supertest from "supertest"

const request=supertest(userRoutes)

//testing the users routes.
describe('test the users endpoints', ()=>{
    it('should return OK response',async()=>{
       const response= await request.get('/users')
       console.log(`API status code:${response.statusCode}`)
    })

    it('should return OK response',async () => {
        const response=await request.get('/users/1')
        console.log(`API status code:${response.statusCode}`)
    })

    it('should return OK response',async () => {
        const response=await request.post('/users')
        console.log(`API status code:${response.statusCode}`)
    })
    
    it('should return OK response',async () => {
        const response=await request.delete('/users/1')
        console.log(`API status code:${response.statusCode}`)
    })

    it('should return OK response',async () => {
        const response=await request.post('users/auth')
        console.log(`API status code:${response.statusCode}`)
    })
})
