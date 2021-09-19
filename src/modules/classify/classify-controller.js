// import path from 'path';
import { Buffer } from 'buffer';
import { promisify } from 'util';
import { WriteFile, ReadFile } from '../../utils/fs-interface.js';

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
async function classifyController(req, res) {

    const file = req.file
    const keywords = _processKeywords(String(req.body.keywords))


    const path = await _saveFileService(file)

    await _crossOutKeywords(path, keywords)

    res.status(200).json({ "message": "ok" })
}


/**
 * * This implementations can be an external services 
 * * if is use for more that one functionalities or
 * * arranging reasons
 * @param {request.file} reqFile 
 * @returns {string} path
 */
async function _saveFileService(reqFile) {
    const bufferData = Buffer(reqFile.buffer)
    const path = process.env.DOCUMENT_PATH + reqFile.originalname;

    await WriteFile(path, bufferData)
    return path
}


/**
 * 
 * @param {String} path 
 * @param {Array<String>} keywords 
 * @returns {String} refactored document
 */
async function _crossOutKeywords(path, keywords) {
    let fileData = await ReadFile(path)

    return fileData
}

/**
 * * Assuming the keywords restricted to separations by spaces or commas.
 * * and there is not apostrophes like: ..., "Buddhas's Dharma", ...
 * @param {String} keywords 
 * @returns {Array<String>} keywords
 */
function _processKeywords(keywords) {
    let keywordArr = []

    let initialQuote = null
    let separator = keywords.includes(',') ? ',' : ' '
    let keyword = ''

    if (substring.includes('\"') || substring.includes('\'')) {
        for (let i = 0; i < String(keywords).length; i++) {
            let val = keywords[i]

            if (val === '\'' || val === '\"') {
                if (initialQuote) {
                    keywordArr.push(keyword.trim())
                    initialQuote = null
                    keyword = ''
                    continue;

                } else {
                    initialQuote = i;
                    if (keyword.length > 0) {
                        keywordArr = keywordArr.concat(keyword.trim().split(separator))
                        keyword = ''
                    }
                    continue
                }
            }
            keyword += val
        }
    }
    else {
        keywordArr = keywordArr.concat(substring.trim().split(separator))
    }

    return keywordArr
}




export {
    classifyController
};
