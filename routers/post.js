const knex = require('../connection/knex_connection')
let startTime = new Date(Date.now());
let endTime = new Date(startTime.getTime());


module.exports = (Router) => {
    Router.post('/add', (req, res) => {
        knex('Important_Notes').insert({
            title: req.body.title,
            notes: req.body.notes,
            set_reminder: endTime
        })
        .then((data) => {
            console.log(data)
            res.send('data inserted..')
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })
}

// 1 second = 1000,1 minute = 60000 

