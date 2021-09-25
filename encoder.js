function encode(str) {
    const length = str.length
    const halfLength = Math.floor(length / 2)
    const isOdd = halfLength % 2
    const inStr = str.split('')
    const inStrReversed = str.split('').reverse()
    const outStr = []

    for (let i = 0; i < halfLength; i++) {
        outStr.push(inStr[i])
        outStr.push(inStrReversed[i])
    }

    if (isOdd) {
        outStr.push(inStr[halfLength])
    }

    return outStr.join('')+'#'
}

module.exports = encode;