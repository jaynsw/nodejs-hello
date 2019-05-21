var mysql = require('mysql');
var db = require('./DB');
var env = process.env;
var dbo =  {
    host: env['bebox_mysql_host'],
    port: env['bebox_mysql_port'],
    user: env['bebox_mysql_user'],
    password: env['bebox_mysql_password'],
    database: env['bebox_mysql_database']
};

var pool  = mysql.createPool(dbo);

function getConnection(){
    return new Promise((resolve, reject) => {
        pool.getConnection((err, conn) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(conn);
        });
    });
}

function listUsers() {
    return getConnection().then(conn => {
        return db.listUsers(conn).then(users => {
            conn.release();
            return users;
        });
        
    }).catch(err => {
        conn.release();
        throw err;
    });
}

module.exports = {
    listUsers,
}