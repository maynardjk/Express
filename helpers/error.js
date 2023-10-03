let errorHelper = {};

function buildError(err, req) {
    return {
        "status": 500,
        "statusText": 'Internal Server Error',
        "message": err.message,
        "stack": err.stack ?? 'n/a',
        "originalError": err,
        "requestInfo": {
            "hostname": req.hostname ?? 'Unknown',
            "path": req.path ?? 'Unknown'
        }
    };
}

module.exports = errorHelper;
