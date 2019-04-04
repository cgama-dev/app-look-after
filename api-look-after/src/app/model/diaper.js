const { connect } = require('./../../database')

const database = connect().db

const DiaperModel = (() => {
    
    const diaper = database.use('diapers')

    return diaper

})

module.exports = DiaperModel()