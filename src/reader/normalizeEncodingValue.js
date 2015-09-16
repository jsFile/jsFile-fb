const defaultEncoding = 'utf-8';
const encodings = {
    'windows-1251': 'cp1251'
};

/**
 *
 * @param value
 * @return {String}
 * @private
 */
export default (value) => value && encodings[String(value).toLowerCase()] || defaultEncoding;