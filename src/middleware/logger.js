

/**
 * * Middleware for test purpose
 */
function loggerMiddleware(req, res, next) {
    console.log(`${req.method.toUpperCase()} ${req.path}`)
    console.log('Request headers: %o', req.headers)
    console.log('Request body: %o', req.body)
    console.log('Request file: %o', req.file)
    next()
}

export {
    loggerMiddleware
}
