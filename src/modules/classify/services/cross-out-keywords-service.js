
/**
 * 
 * @param {String} path 
 * @param {Array<String>} keywords 
 * @returns {String} refactored document
 */
export default async function crossOutKeywords(path, keywords) {
    let fileData = await ReadFile(path)

    return fileData
}
