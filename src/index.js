require('dotenv').config();
const express = require('express');
const router = require ('./router');
const db = require ('./db');
const cors = require('cors');

const app = express();
// const port = 3001;

app.use(express.json());
app.use(cors());
app.use(router);


db.then(() => {
    // app.listen(port, () => {
    //     console.log(`Server app listening at http://localhost:${port}`)
    // })
    app.listen(process.env.PORT || 3000, 
        () => console.log("Server is running..."));
}).catch(console.log)
