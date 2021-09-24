import express from 'express';
import path from 'path';
import cors from 'cors';
import { config } from 'dotenv';
import { fileURLToPath } from 'url';

import { loggerMiddleware } from './src/middleware/logger.js';
import routerToModules from './src/routes.js';

import corsConfiguration from './src/middleware/cors-middleware-configuration.js'

const app = express();
config()

app.use(cors())

//CORS CONFIGURATION
app.use(cors(corsConfiguration))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(loggerMiddleware) //for debug purpose only

app.use('/document', express.static(path.dirname(fileURLToPath(import.meta.url)) + '\\src\\documents'));

app.use('/api', routerToModules)

app.use('*', (req, res) => {
    res.json({
        "message": `path ${req.originalUrl} doesn't exist`,
        "alternatives": ["/api", "/document"]
    }).status(404)
})


app.listen(process.env.EXPRESS_PORT, () => {
    console.log('Server on on port ' + process.env.EXPRESS_PORT)
})

