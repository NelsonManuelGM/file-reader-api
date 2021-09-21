import {WriteFile} from '../../filesystem/fs-interface.js'

/**
 * * Service to save files on the /documents folder
 * * in order to abstract concerns 
 * @param {String} name 
 * @returns {Buffer} data
 */
export default async function saveFileService(name, buffer) {
    const bufferData = Buffer.from(buffer)
    const path = process.env.DOCUMENT_PATH + name;

    await WriteFile(path, bufferData)
    return path
}