const knex = require('../connection/knex_connection')

module.exports = (Router) => {
    Router.delete('/delete_data/:notes_id', (req, res) => {
        knex('Important_Notes')
        .where('notes_id', req.params.notes_id)
        .delete()
        .then((data) => {
            console.log(data)
            res.send('data has deleted...')
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })
}