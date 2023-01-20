const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500).json(err.message);
    next()
}

const routeNotFound = (req, res, next) => {
    if (!req.route) {
        res.status(404).json("route not found");
        next()
    }
}

module.exports = {
    errorHandler,
    routeNotFound
}