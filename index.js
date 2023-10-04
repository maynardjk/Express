const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());

// process.env["NODE_ENV"] = "production";
const config = require('config');
const host = config.get('host');
const prefix = config.get('prefix');
const port = config.get('port');
const errorHelper = require('./helpers/error');

router.use('/product', require('./routes/product'));

app.use(prefix, router);

app.use(errorHelper.errorToConsole);
app.use(errorHelper.errorToFile);
app.use(errorHelper.errorFinal);

let server = app.listen(port, function(){
    console.log(`Express server is running on ${host}:${port}.`);
});
