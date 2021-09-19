import {WriteFile} from '../../../interfaces/fs-interface.js'

/**
 * * This implementations can be an external services 
 * * if is use for more that one functionalities or
 * * arranging reasons
 * @param {String} name 
 * @returns {Buffer} data
 */
export default async function saveFileService(name, buffer) {
    const bufferData = Buffer.from(buffer)
    const path = process.env.DOCUMENT_PATH + name;

    await WriteFile(path, bufferData)
    return path
}