const pgp = require('pg-promise')({
    query: e => {
        console.log('QUERY', e.query);
    }
});

const options = {
    host: 'localhost',
    database: 'cryptonative_app',
    user: 'postgres',
    password: 'admin'
};

const db = pgp(options);

module.exports = db;