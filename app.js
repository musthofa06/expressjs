const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/',(req, res)=> res.send('hello word'))
app.get('/api/test',(req, res)=> res.send('ini test'))
app.post('/api/auth/login', (req, res)=>{
    let reqbody = req.body;
    console.log(reqbody)
    if (reqbody.username == 'admin'){
        res.send({
            success: true,
            data:[{
                id_user: 1,
                username: 'admin',
                password: 'ulala',
                nama_user: 'administrator'
            }]
        })
    }else{
        res.send({
            success: false,
            message: 'invalid login'
        })
    }
    res.send(reqbody.username);

})

app.listen(port, ()=> console.log(`Backend is running on port ${port}`))