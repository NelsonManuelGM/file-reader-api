
/**
 * * Assuming the keywords restricted to separations by spaces or commas.
 * * Following the exercise order and assuming 
 * * there is not apostrophes like: ..., "Buddhas's Dharma", ...
 * * this method validate, extract the keywords from the string
 * @param {String} keywords 
 * @returns {Array<String>} keywords
 */
export default function processKeywords(keywords) {
    let keywordArr = []

    let initialQuote = false
    let separator = keywords.includes(',') ? ',' : ' '
    let keyword = ''

    console.log('LOGIN KEYWORDS: ', keywords)

    if (keywords.includes('\"') || keywords.includes('\'')) {
        for (let i = 0; i < String(keywords).length; i++) {
            let val = keywords[i]

            if (val === '\'' || val === '\"') {
                if (initialQuote) {
                    keywordArr.push(keyword.trim())
                    initialQuote = false
                    keyword = ''
                    continue;

                } else {
                    initialQuote = true;
                    if (keyword.length > 0) {
                        keywordArr = keywordArr.concat(keyword.trim().split(separator))
                        keyword = ''
                    }
                    continue
                }
            }

            keyword += val
        }

        if (keyword.length > 0) {
            keywordArr = keywordArr.concat(keyword.trim().split(separator))
        }

    }
    else {
        keywordArr = keywordArr.concat(keywords.trim().split(separator))
    }

    console.log('LOGIN KEYWORDS: ', keywordArr)

    return keywordArr
}