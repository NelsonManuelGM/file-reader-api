
/**
 * * Assuming the keywords restricted to separations by spaces or commas.
 * * and there is not apostrophes like: ..., "Buddhas's Dharma", ...
 * @param {String} keywords 
 * @returns {Array<String>} keywords
 */
 export default function processKeywords(keywords) {
    let keywordArr = []

    let initialQuote = null
    let separator = keywords.includes(',') ? ',' : ' '
    let keyword = ''

    if (substring.includes('\"') || substring.includes('\'')) {
        for (let i = 0; i < String(keywords).length; i++) {
            let val = keywords[i]

            if (val === '\'' || val === '\"') {
                if (initialQuote) {
                    keywordArr.push(keyword.trim())
                    initialQuote = null
                    keyword = ''
                    continue;

                } else {
                    initialQuote = i;
                    if (keyword.length > 0) {
                        keywordArr = keywordArr.concat(keyword.trim().split(separator))
                        keyword = ''
                    }
                    continue
                }
            }
            keyword += val
        }
    }
    else {
        keywordArr = keywordArr.concat(substring.trim().split(separator))
    }

    return keywordArr
}