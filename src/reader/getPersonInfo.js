/**
 *
 * @param xml
 * @return {Object}
 * @private
 */
export default function (xml) {
    const info = {};

    [].forEach.call(xml && xml.childNodes || [], ({localName, textContent}) => {

        // firstName, middleName, lastName
        if (localName) {
            info[localName.replace(/-\w+$/, '') + 'Name'] = textContent || '';
        }
    });

    return info;
};