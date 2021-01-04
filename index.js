const express = require('express')
const app = express()
const knex = require('./connection/create_table')
const sleep = require('system-sleep')
const router = express.Router()

app.use(express.json())
app.use('/', router);

require('./routers/post')(router)
require('./routers/get')(router,sleep)
require('./routers/update')(router)
require('./routers/delete')(router)


app.listen(8000, () => {
    console.log('server started on port 8000')
})






