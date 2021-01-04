const knex = require('../connection/knex_connection')
let startTime = new Date(Date.now());
let endTime = new Date(startTime.getTime());

module.exports = (Router) => {
    Router.put('/update_data/:notes_id', (req, res) => {
        knex('Important_Notes')
        .where('notes_id', req.params.notes_id)
        .update({
            title: req.body.title,
            notes: req.body.notes,
            set_reminder: endTime
        })
        .then((data) => {
            console.log(data)
            res.send('data updated...')
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })

    })
}
