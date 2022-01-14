const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const {connect} = require('./UFC/src/utils/database/db');

const warriors = require('./UFC/src/api/routes/warriors.routes');


connect();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/public', express.static('public'));

app.use('/api', warriors);

const port = process.env.PORT || 8000;

app.listen(port, () =>{
    console.log('connected to port' + port)
});

app.use((req, res, next) => {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode). send(err.message);

});