const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());

// process.env["NODE_ENV"] = "production";
const config = require('config');
const host = config.get('host');
const prefix = config.get('prefix');
const port = config.get('port');

router.use('/product', require('./routes/product'));

app.use(prefix, router);

app.use(function(err, req, res, next) {
    let errObject = buildError(err, req);
    console.log(errObject);
    next(errObject);
});

app.use(function(err, req, res, next) {
    res.status(500).send({
        "status": 500,
        "statusText": 'Internal Server Error',
        "message": `An error occured; please contact the system administrator`
    });
});

let server = app.listen(port, function(){
    console.log(`Express server is running on ${host}:${port}.`);
});


