'use strict';

const utilities = {
    findPositionIndex
}

function findPositionIndex(elementHeight, offsetMargin, scrollPositionY) {
    return Math.max(Math.floor((scrollPositionY - offsetMargin) / elementHeight), 0)
}

module.exports = utilities;

