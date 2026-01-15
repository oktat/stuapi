import request from 'supertest'
import app from '../app/app.js'

describe('/api/students', () => {
    const restype= 'application/json; charset=utf-8'
    var token = null

    it('post /students ', async () => {
      await request(app)
        .post('/api/students')
        .set('Accept', 'application/json')
        .send({
            name: 'Something'
        })
        .expect('Content-Type', restype)
        .expect(201)

    })
    it('get /students', async () => {
      await request(app)
        .get('/api/students')
        .set('Accept', 'application/json')
        .expect('Content-Type', restype)
        .expect(200)
    })
    it('put /students/:id', async () => {
      await request(app)
        .put('/api/students/1')
        .set('Accept', 'application/json')
        .send({
            name: 'Another'
        })
        .expect('Content-Type', restype)
        .expect(200)
    })
    it('delete /students/:id', async () => {
      await request(app)
        .delete('/api/students/1')
        .set('Accept', 'application/json')
        .expect(200)
    })
})
