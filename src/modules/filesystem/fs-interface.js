import fs from 'fs/promises';
import * as ph from 'path';

/**
 * ! Module FileSystem interaction
 */

/**
 * 
 * @param {String} path 
 * @param {Buffer} data 
 * @returns {void}
 */
async function WriteFile(path, data) {
    try{
        await fs.writeFile(path, data, { encoding: 'utf8' })
        console.log('file already written!')
    }
    catch(error){
        console.log(error)
    }
}

/**
 * 
 * @param {String} path 
 * @returns {String} data
 */
function ReadFile(path) {
    try{
        const data = fs.readFile(path, { encoding: 'utf8' })
        return data    
    }
    catch(error){
        console.log(error)
    }
}


/**
 * 
 * @param {String} document path 
 */
function CreateFile(path){
    const folderName = ph.dirname(path)
    fs.mkdir(folderName)
}

export {
    WriteFile,
    ReadFile,
    CreateFile
};
