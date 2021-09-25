function decode(str) {
    const length = str.length
    const firstPart = []
    const secondPart = []
    const inStr = str.split('')
    inStr.pop()

    for (let i = 0; i < length; i++) {
        if (i % 2) {
            secondPart.push(inStr[i])
        } else {
            firstPart.push(inStr[i])
        }
    }

    return firstPart.join('') + secondPart.reverse().join('')
}

module.exports = decode;