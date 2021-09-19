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
        console.log('cross out string per keyword: ', crossOutGenerator(k.length))
        console.log('keyword: ', k)
        fileData = String(fileData).replace(k, crossOutGenerator(k.length))
    })


    await WriteFile(path, fileData)
}
