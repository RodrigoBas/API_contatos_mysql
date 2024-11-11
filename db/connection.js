const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.HOST || 'localhost',
    user: process.env.USAURIO || 'usuario',
    password: process.env.PASS || 'senha',
    database: process.env.DATABASE || 'contatosBD',
    port: process.env.DB_PORT || 11550
});


module.exports = pool.promise();