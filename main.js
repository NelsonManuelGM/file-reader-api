import express from 'express';
import path from 'path';
import { config } from 'dotenv';
import { fileURLToPath } from 'url';

import routerToModules from './src/routes.js';
import { loggerMiddleware } from './src/middleware/logger.js';

const app = express();
config()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/document',loggerMiddleware, express.static(path.dirname(fileURLToPath(import.meta.url)) + '\\src\\documents'));

app.use('/api', loggerMiddleware, routerToModules)

app.use('*',(req, res) => {
    res.json({
        "message":`path ${req.originalUrl} doesn't exist`,
        "alternatives":["/api","/document"]
    }).status(404)
})


app.listen(5500, () => {
    console.log('Server on on port ' + process.env.EXPRESS_PORT)
})

