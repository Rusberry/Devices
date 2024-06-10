const Firebird = require('node-firebird');
const options = {
    host: '127.0.0.1',
    port: 3050,
    database: '/path/to/your/database.fdb',
    user: 'your_username',
    password: 'your_password'
};

const pool = Firebird.pool(5, options);

function queryDatabase(query, params = []) {
    return new Promise((resolve, reject) => {
        pool.get((err, db) => {
            if (err) {
                return reject(err);
            }
            db.query(query, params, (err, result) => {
                db.detach();
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    });
}

module.exports = queryDatabase;
