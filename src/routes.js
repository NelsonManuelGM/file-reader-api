import { Router } from 'express';
import multer from "multer";
import { loggerMiddleware } from './middleware/logger.js';
import { classifyController } from './modules/classify/classify-controller.js';


const router = Router();
//didn't define destination to receive the buffer instead the string
const upload = multer({});


router.post('/classify',
    upload.single('document'),
    loggerMiddleware,
    classifyController)


export default router;