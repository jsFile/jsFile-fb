const encodings = {
    'windows-1251': 'cp1251'
};

export const defaultEncoding = 'utf8';

/**
 *
 * @param value
 * @return {String}
 * @private
 */
export default (value) => value && encodings[String(value).toLowerCase()] || defaultEncoding;