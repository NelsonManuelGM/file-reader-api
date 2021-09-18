import {express} from 'express';
// import {config} from 'dotenv';

const app = express();
// config()

app.listen(5000,()=>{
    console.log('Server on on port')
})

