const knex = require('../connection/knex_connection')

module.exports = (Router) => {
    Router.get('/get', (req, res) => {
        knex.select('*').from('Important_Notes')
        .then((data) => {
            console.log(data)
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })

    .get('/get/:notes_id', (req, res) => {
        var notes_id = req.params.notes_id
        knex.select('*').from('Important_Notes')
        .where('Important_Notes.notes_id', notes_id)
        .then((data) => {
            console.log(data)
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })

    .get('/search_data/:search', (req, res) => {
        var search = req.params.search
        knex('Important_Notes')
        .where('title', 'like', "%" +search+ "%")
        .then((result) => {
            console.log(result)
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        })
    })
}
