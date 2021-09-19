import crossOutKeywords from '../services/cross-out-keywords-service.js';
import saveFileService from '../services/save-file-service.js';
import docPathValidator from '../services/document-validator-service.js';
import processKeywords from '../utils/process-keywords-service.js';


/**
 * Controller to validate and process documents
 * @param {Request} req 
 * @param {Response} res 
 */
export default async function classifyController(req, res) {
    //validation
    let validator= docPathValidator(req)
    if(validator){
        return res.status(400).json({
            "message":validator
        })
    }

    //get variables and valid keywords
    const { originalname, buffer } = req.file
    const documentName = String(originalname).trim().replace(' ','_')
    const keywords = await processKeywords(String(req.body.keywords))

    //save
    const path = await saveFileService(documentName, buffer)

    //cross out info
    await crossOutKeywords(path, keywords)

    //return
    const baseURL = `http://${req.headers.host}/document/`

    return res.status(200).json({ "document": baseURL + documentName})
}


