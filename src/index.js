//capitalize
function capitalize(str) {
    if (typeof str !== 'string' || str.trim() === '') {
        throw new Error('Input must be a non-empty string');
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//reverse
function reverse(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    return str.split('').reverse().join('');
}


//calculator
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => (b !== 0 ? a / b : 'Error: Division by zero'), // Fixing the typo here
};


//caesarCipher
function caesarCipher(str, shift){
    return str
    .split('')
    .map(char=>{
        if(/[a-zA-Z]/.test(char)){
            const code=char.charCodeAt(0);
            const base=code>=65 && code<=90?65:97;
            return String.fromCharCode(((code-base+shift)%26)+base);
        }
        return char;
    })
    .join('');
}

//analyzeArray
function analyzeArray(arr) {
    if (!Array.isArray(arr) || !arr.every(item => typeof item === 'number')) {
        throw new Error('Input must be an array of numbers');
    }
    return {
        average: arr.reduce((a, b) => a + b, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
    };
}


//exporting
module.exports={
    capitalize, reverse, calculator, caesarCipher, analyzeArray
};