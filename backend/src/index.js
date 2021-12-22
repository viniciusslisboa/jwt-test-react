const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');

app.use(cors());
const router = require('./routes');

app.use(bodyparser.json());
app.use(router)
app.listen(3001, () => {
    console.log('running on 3001');
})