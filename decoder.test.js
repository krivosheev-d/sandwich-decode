const decode = require('./decoder');

test('decode shacnidw#', () => {
    expect(decode('shacnidw#')).toBe('sandwich');
});

test('decode Aabrrbaacda#', () => {
    expect(decode('Aabrrbaacda#')).toBe('Abracadabra');
});