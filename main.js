import cors from 'cors';
import { config } from 'dotenv';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { loggerMiddleware } from './src/middleware/logger.js';
import routerToModules from './src/routes.js';


const app = express();
config()
app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/document', loggerMiddleware, express.static(path.dirname(fileURLToPath(import.meta.url)) + '\\src\\documents'));

app.use('/api', loggerMiddleware, routerToModules)

app.use('*', (req, res) => {
    res.json({
        "message": `path ${req.originalUrl} doesn't exist`,
        "alternatives": ["/api", "/document"]
    }).status(404)
})


app.listen(5500, () => {
    console.log('Server on on port ' + process.env.EXPRESS_PORT)
})

