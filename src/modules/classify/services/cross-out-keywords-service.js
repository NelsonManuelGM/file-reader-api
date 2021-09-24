import * as ph from 'path';

import { ReadFile, WriteFile } from '../../filesystem/fs-interface.js'
import crossOutGenerator from './cross-generator-service.js'


/**
 * * Function to cross out the already saved document
 * * with keywords
 * @param {String} path 
 * @param {Array<String>} keywords 
 * @returns {String} refactored document
 */
export default async function crossOutKeywords(path, keywords) {
    let fileData = await ReadFile(path)
    
    keywords.forEach(keyword => {
        
        //!HELPER FOR DEBUG PURPOSE!
        console.log('cross out string per keyword: ',
            crossOutGenerator(keyword.length))
        console.log('keyword: ', keyword)
        
        fileData = String(fileData).replace(
            keyword,
            crossOutGenerator(keyword.length)
        )
    })

    //change name ej: doc.txt to: doc.processed.txt
    //consider that this value can be edited in CLASSIFIED_ADDON global var
    const baseName = ph.basename(path)
    const pointIndex = baseName.indexOf('.')
    let newName = baseName.slice(0, pointIndex) + '.' + process.env.CLASSIFIED_ADDON + '.txt'

    let newPath = ph.dirname(path) + '/' + newName

    //write new crossed out file
    await WriteFile(newPath, fileData)

    return newName;
}
