export function findPositionIndex(elementHeight, offsetMargin, scrollPositionY) {
    return Math.max(Math.floor((scrollPositionY - offsetMargin) / elementHeight), 0)
}