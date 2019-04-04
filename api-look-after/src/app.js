require('dotenv').config({ path: '.env.local' })

const express = require('express')
const app = express()
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./documentation/swagger.js')
const diaperRouter = require('./app/routes/diaper')

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.use('/diapers', diaperRouter)

//docs
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
    explorer: true
}));

//erros
app.use((err, req, res, next) => {
    const { name, message, stack } = err

    if (name === 'ValidationError') {
        return res.status(400).send({ error: message })
    } else {
        return res.status(500).send({ name, message, stack })
    }
})

module.exports = app



