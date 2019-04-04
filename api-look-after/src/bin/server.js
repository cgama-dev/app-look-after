const app = require('./../app')

const { connect } = require('./../database')

const database = connect().db

const port = process.env.PORT || 4001

app.listen(port, async () => {
    try {
        const diaper = database.use('diapers')

        await diaper.info()

        console.log(`Database initialized >>> ${new Date()}`)
    } catch (error) {

        await database.create('diapers')

        console.log(`Database diapers created >>> ${new Date()}`)
    }
    console.log(`Api connecting port :: ${port}`)
})