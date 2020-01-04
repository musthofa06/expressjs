const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/',(req, res)=> res.send('hello word'))
app.get('/api/test',(req, res)=> res.send('ini test'))
app.post('/api/auth/login', (req, res)=>{
    let reqbody = req.body;
    console.log(reqbody)
    // if (reqbody.username == 'admin'){
    //     res.send({
    //         success: true,
    //         data:[{
    //             id_user: 1,
    //             username: 'admin',
    //             password: 'ulala',
    //             nama_user: 'administrator'
    //         }]
    //     })
    // }else{
    //     res.send({
    //         success: false,
    //         message: 'invalid login'
    //     })
    // }
    var mysql = require('mysql')
    var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ci-login'
    })

    connection.connect()

    connection.query(`SELECT * FROM tbl_users WHERE username = '${reqbody.username}'`, function (err, rows, fields) {
        if (err) throw err
        if(rows.length < 1){
            res.send({
                success: false,
                message: 'Woi salah oi'
            })
        }else{
            res.send({
                success: true,
                data: rows
            });
        }
    })

    connection.end()
    // res.send(reqbody.username);
})

app.listen(port, ()=> console.log(`Backend is running on port ${port}`))