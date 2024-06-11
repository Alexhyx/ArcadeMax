//Written with the help of this tutorial
//https://www.youtube.com/watch?v=RHLxtAo0aEI

const express = require("express");
//Access our server from different domains
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/router");
const mysql = require('mysql')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const corsOptions = {
    origin:"*",
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

// We didn't have time to finish implementing this but it's what we would've
// done with more time
/*
const db = mysql.createConnection({
    host: "localhost",
    user: 'test',
    password: 'password',
    database: 'ArcadeMax'
})
*/


app.use('/', router)
//Front end should run on a different server
const port = 4000;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


