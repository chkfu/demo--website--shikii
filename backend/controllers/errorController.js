const sendError = (err, res) => {
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
            error: err,
            stack: err.stack
        });
    } else {
        res.status(500).json({
            status: err.status,
            message: err.message,
            error: err,
            stack: err.stack
        });
    }
};

module.exports = ((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    sendError(err, res);
});