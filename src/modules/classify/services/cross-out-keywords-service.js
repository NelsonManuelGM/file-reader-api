import crossOutGenerator from '../utils/cross-generator.js'
import { WriteFile, ReadFile } from '../../../interfaces/fs-interface.js'

/**
 * 
 * @param {String} path 
 * @param {Array<String>} keywords 
 * @returns {String} refactored document
 */
export default async function crossOutKeywords(path, keywords) {
    let fileData = await ReadFile(path)

    keywords.forEach(k => {
        console.log(crossOutGenerator(k.length))
        console.log(k)
        fileData = String(fileData).replace(k, crossOutGenerator(k.length))
    })


    await WriteFile(path, fileData)
}
