const mysql = require('mysql2');
const host = document.getElementById('host').value;
const usuario = document.getElementById('usuario').value;
const contra = document.getElementById('contra').value;
const database = document.getElementById('database').value;
const port = document.getElementById('port').value;
const connection = mysql.createConnection({
    host: host,
    user: usuario,
    password: contra,
    database: database,
    port: port
});
connection.connect(function (err) {
    if (err) {
        document.getElementById('txtData').value = err.code+'\n'+err.fatal+'\nerror';
    } else {
        document.getElementById('txtData').value = `host: ${host} user: ${user} password: ${password} database: ${database} port: ${port}\nConeccion exitosa`;

    }
});

module.exports = connection 