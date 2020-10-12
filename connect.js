var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'navgurukul',
        database: 'notes'
    }
});

module.exports = knex;

knex.schema.hasTable('notesInformation').then((exists) => {
    if(!exists){
        return knex.schema.createTable('notesInformation', (table) => {
            table.increments('Id')
            table.string('Title')
            table.string('Name')
        })
        .catch((err) => {
            console.log(err, 'There is some err while writing the query')
        })
    }
    return console.log('Table is created....')
})