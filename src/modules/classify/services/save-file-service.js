import { WriteFile } from '../../filesystem/fs-interface.js'

/**
 * * Service to save files on the /documents folder
 * * in order to abstract concerns 
 * @param {String} name 
 * @returns {Buffer} data
 */
export default async function saveFileService(name, data) {

    const _data = typeof data === 'string' ? data : Buffer.from(data)

    const path = process.env.DOCUMENT_PATH + name;

    await WriteFile(path, _data)

    return path
}