// import path from 'path';
import crossOutKeywords from '../services/cross-out-keywords-service.js';
import saveFileService from '../services/save-file-service.js';
import processKeywords from '../utils/process-keywords.js';


/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
export default async function classifyController(req, res) {

    const { originalname, buffer } = req.file
    const documentName = String(originalname).trim().replace(' ','_')
    const keywords = await processKeywords(String(req.body.keywords))

    const path = await saveFileService(documentName, buffer)

    await crossOutKeywords(path, keywords)

    const baseURL = `http://${req.headers.host}/document/`

    res.status(200).json({ "document": baseURL + documentName})
}


