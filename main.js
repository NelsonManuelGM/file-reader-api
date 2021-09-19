import express from 'express';
import { config } from 'dotenv';

import routerToModules from './src/routes.js';
import { loggerMiddleware } from './src/middleware/logger.js';

const app = express();
config()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/api', routerToModules)


app.get('/', loggerMiddleware, (req, res) => {
    res.redirect('/api')
})


app.listen(5500, () => {
    console.log('Server on on port ' + process.env.EXPRESS_PORT)
})

