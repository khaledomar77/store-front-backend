import supertest from 'supertest'
import app from '../../main'

const request=supertest(app)

//testing the main router.
describe('test the main get / endpoint', ()=>{
    it('should return OK response',async()=>{
       const response= await request.get('/')
       console.log(`API status code:${response.statusCode}`)
    })
})

