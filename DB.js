/**
 * 
CREATE TABLE `user` (
  `id` char(32) NOT NULL DEFAULT '',
  `name` varchar(8) NOT NULL DEFAULT '',
  `email` varchar(40) NOT NULL DEFAULT '',
  `pwd` char(64) NOT NULL DEFAULT '',
  `role` char(2) NOT NULL DEFAULT '',
  `createTime` bigint(20) NOT NULL,
  `deleteTime` bigint(20) unsigned DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `email` (`email`),
  KEY `list` (`deleteTime`,`createTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
 */

 
function listUsers(conn) {
    return new Promise((resolve, reject) => {
        return conn.query('select * from user', (err, results, fields) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(results);
        });
    });
}

module.exports = {
    listUsers,
}