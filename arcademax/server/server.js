//Written with the help of this tutorial
//https://www.youtube.com/watch?v=RHLxtAo0aEI


const express = require("express");
//Access our server from different domains
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const corsOptions = {
    origin:"*",
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));


//Front end should run on a different server
const port = 4000;
const server = app.listen(port, () => {
    console.log('Server is running on port ${port}')
})


