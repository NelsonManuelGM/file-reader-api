/**
 * * This implementations can be an external services 
 * * if is use for more that one functionalities or
 * * arranging reasons
 * @param {request.file} reqFile 
 * @returns {string} path
 */
 export default async function saveFileService(reqFile) {
    const bufferData = Buffer(reqFile.buffer)
    const path = process.env.DOCUMENT_PATH + reqFile.originalname;

    await WriteFile(path, bufferData)
    return path
}