const express = require('express')
const setupDB = require('./config/database')
const router = require('./config/routes')
const port = 8080
const app = express()

app.use(express.json())
app.use('/', router)
setupDB()

app.listen(port, () => {
 console.log('listening to port', port)
})