import { Router } from 'express';
import multer from "multer";
import classifyController from './modules/classify/controller/classify-controller.js';

const router = Router();
//didn't define destination to receive the buffer instead the string
const upload = multer({});


router.post('/classify',
    upload.single('document'),
    classifyController)

router.use('*',(req, res) => {
    res.json({
        "error":`path ${req.originalUrl} doesn't exist`,
        "alternatives":['/api/classify']
    }).status(404)
})

 
export default router;