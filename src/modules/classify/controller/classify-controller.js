// import path from 'path';
import { Buffer } from 'buffer';
import { promisify } from 'util';
import { WriteFile, ReadFile } from '../../../utils/fs-interface.js';
import processKeywords from '../utils/process-keywords.js'
import saveFileService from '../services/save-file-service.js'
import crossOutKeywords from '../services/cross-out-keywords-service.js'
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
export default async function classifyController(req, res) {

    const file = req.file
    const keywords = await processKeywords(String(req.body.keywords))

    const path = await saveFileService(file)

    await crossOutKeywords(path, keywords)

    res.status(200).json({ "message": "ok" })
}


