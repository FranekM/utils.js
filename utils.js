/*
 * ------------------------------------------------------------
 * "THE BEERWARE LICENSE":
 * Bartosz Mierzwa wrote this code. As long as you retain this
 * notice, you can do whatever you want with this stuff. If we
 * meet someday, and you think this stuff is worth it, you can
 * buy me a beer in return. (If you really have to remove this
 * notice go ahead but then good beer in return is obligatory)
 * ------------------------------------------------------------
 */

/**
 * parse object to url parameters like jQuery params method
 * @param {Object} params
 */
function parseParams(params) {
    let string = ''
    for (let k in params) {
        string += k + '=' + params[k] + '&'
    }
    string = string.slice(0, -1)

    return encodeURI(string)
}

/**
 * Removes <i>count</i> or all but <i>count</i> children from <i>parent</i> element
 * beginning from first or last child.
 * @param {HTMLElement} parent
 * @param {Number} count - 0: remove all, >0: remove this number, <0 leave this number
 * @param {Boolean} fromFirst - when true start removing from first, default false
 */
function clear(parent, count = 0, fromFirst = false) {
    if (count > 0) {
        count = parent.children.length - count
    } else if (count < 0) {
        count = -count
    }

    while (parent.children.length > count) {
        let child = fromFirst ? parent.firstChild : parent.lastChild
        parent.removeChild(child)
    }
}

/**
 * Create new dom element with attributes passed in 2nd. argument
 * @param {String} tagName
 * @param {Object} attributes
 */
function create(tagName, attributes = {}) {
    let tag = document.createElement(tagName)
    for (k in attributes) {
        tag[k] = attributes[k]
    }

    return tag
}