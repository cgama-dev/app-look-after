const supertest = require('supertest')

const app = require('./../../src/app')

describe(" TEST :: Model Diaper", () => {
    test("Should loading all diapers", async () => {

        const { get } = await supertest(app)

        const data = await get('/diapers')

        expect(data.status).toBe(200)
        expect(data.body.message).toBe('Diapers found with success')
        expect(data.body.data.length).toBeGreaterThan(0)
    })

    test("Should add a diaper", async () => {

        const { post } = supertest(app)

        const diaper = {
            "model": "Hunglle",
            "description": "Perfect to your baby",
            "price": 11.0,
            "diaper_details": [
                {
                    "name": "Medium",
                    "quantity": 10
                }
            ]
        }

        const data = await post('/diapers')
            .send(diaper)

        expect(data.status).toBe(201)

    })
})