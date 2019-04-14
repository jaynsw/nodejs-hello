var mysql = require('mysql');
var db = require('./DB');
var dbo = require('./dbo');

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