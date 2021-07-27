var con;
function login(){
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    if (user=='admin' && password=='1234'){
        location.href='./index.html';
    }
    else{
        alert('Datos incorrectos');
    }
}
function sendParams() {
    con = require('./connect');
    //document.getElementById('txtData').value = `host: ${host} usuario: ${usuario} contra: ${contra} database: ${database} port: ${port}`;
}
function addData() {
    // Crear query para INSERT, SELECT, UPDATE O DELETE
    const nombre =document.getElementById('nombre').value;
    const ap_pat =document.getElementById('ap_pat').value;
    const ap_mat = document.getElementById('ap_mat').value;
    const edad =document.getElementById('edad').value;

    $query = `INSERT INTO persona (nombre, ap_pat, ap_mat, edad) VALUES (${nombre},${ap_pat},${ap_mat},${edad} )`;

    con.query($query, function (err, rows, fields) {

        if (err) {
            console.log('Error Query');
            console.log(err);
            return;
        }

        console.log("Query exitoso", rows);
    });

}