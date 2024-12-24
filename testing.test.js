const functions = require('./testing');

test('returns the string as its first letter in uppercase', () => {
    expect(functions.capitalize('ramen')).toBe('Ramen');
});

test('returns the reversed string',()=>{
    expect(functions.reverseString('ramen')).toBe('nemar')
});
test('returns the sum of two numbers',()=>{
    expect(functions.calculator().add(2,3)).toBe(5);
})
test('returns the difference of two numbers',()=>{
    expect(functions.calculator().subtract(2,3)).toBe(-1);
})
test('returns the product of two numbers',()=>{
    expect(functions.calculator().multiply(2,3)).toBe(6);
})
test('returns the product of two numbers',()=>{
    expect(functions.calculator().divide(6,2)).toBe(3);
});

test('takes a string and a shift factor and returns it with each character “shifted” ',()=>{
    expect(functions.caesarCipher('hello',1)).toBe('ifmmp')
})


test('takes a string and a shift factor and returns it with each character “shifted” ',()=>{
    expect(functions.caesarCipher('heLlo',1)).toBe('ifMmp')
})

test('takes a string and a shift factor and returns it with each character “shifted” ',()=>{
    expect(functions.caesarCipher('heLlo!',1)).toBe('ifMmp!')
})

test('takes an array of numbers and returns an object with the following properties: average, min, max, and length', () => {
    expect(functions.analyzeArray([1, 2, 3, 4, 5])).toEqual({ average: 3, min: 1, max: 5, length: 5 }); 
  });
