const DatabaseConfig = (() => {

    const couchDB = {
        uri: `http://${process.env.COUCHDB_USERNAME}:${process.env.COUCHDB_PASSWD}@localhost:5984`
    }

    const database = () => require('nano')(couchDB.uri);

    const connect = () => {
        try {
            return database()
        } catch (error) {
            throw Error(`Error connecting to database ${error}`)
        }
    }

    return {
        connect
    }
})


module.exports = DatabaseConfig()