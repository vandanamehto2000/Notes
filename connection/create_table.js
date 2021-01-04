const knex = require('./knex_connection')

knex.schema.hasTable('Important_Notes').then((exists) => {
    if(!exists){
        return knex.schema.createTable('Important_Notes', (table) => {
            table.increments('notes_id').primary();
            table.string('title')
            table.string('notes')
            table.string('set_reminder')
        })
        .catch((err) => {
            console.log(err)
        })
    } 
    return console.log('table has created...')
})