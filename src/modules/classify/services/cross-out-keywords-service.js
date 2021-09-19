import crossOutGenerator from './cross-generator-service.js'
import { WriteFile, ReadFile } from '../../filesystem/fs-interface.js'

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
