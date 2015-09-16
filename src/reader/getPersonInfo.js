import {dom as $} from 'JsFile';

/**
 *
 * @param xml
 * @return {Object}
 * @private
 */
export default function (xml) {
    const info = {};

    $.children(xml).forEach(({localName, textContent}) => {

        // firstName, middleName, lastName
        if (localName) {
            info[localName.replace(/-\w+$/, '') + 'Name'] = textContent || '';
        }
    });

    return info;
};