let mysql = require('mysql');

function creadConnection(){
    let connection = mysql.createConnection({
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: '0p9o8i7u6y',
        database: 'test'
    })
    return connection
}

module.exports.creadConnection = creadConnection