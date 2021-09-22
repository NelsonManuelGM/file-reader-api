import fs from 'fs/promises';
import * as ph from 'path';

/**
 * ! Module FileSystem interaction
 */

/**
 * 
 * @param {String} path 
 * @param {Buffer} data 
 * @returns {Void}
 */
function WriteFile(path, data) {
    try{
        fs.writeFile(path, data, { encoding: 'utf8' })
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

export {
    WriteFile,
    ReadFile
};
