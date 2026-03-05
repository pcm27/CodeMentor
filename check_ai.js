
const ai = require('ai');
console.log('Exports:', Object.keys(ai));
try {
    const aiMjs = require('ai/dist/index.d.ts'); // this won't work for types
} catch (e) { }
