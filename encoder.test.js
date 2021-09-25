const encode = require('./encoder');

test('encode sandwich', () => {
    expect(encode('sandwich')).toBe('shacnidw#');
});

test('encode Abracadabra', () => {
    expect(encode('Abracadabra')).toBe('Aabrrbaacda#');
});