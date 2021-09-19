

/**
 * * Middleware for test purpose
 */
function loggerMiddleware(req, res, next){
    console.log(`${req.method.toUpperCase()} ${req.path}`)
    console.log('Request headers\n',req.headers)
    console.log('Request body \n',req.body)
    console.log('Request file \n',req.file)
    next()
}

export {
    loggerMiddleware
}