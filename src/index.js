const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let arr = [];
  let space = '**********'
  let result = '';
  for (let i = 0; i < expr.length; i += 10) {
    let letter = expr.slice(i, i + 10);
    let index = 0;
    while (letter[index] === '0') {
      index += 1
    }
    arr.push(letter.slice(index))
  }
  arr = arr.map((item) => item.replace(/10/g, '.'))
  arr = arr.map((item) => item.replace(/11/g, '-'))
  arr = arr.map((item) => item.replace(space, ' '))
  console.log(arr)
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === ' ') {
      result += arr[i]
    } else {
      result += MORSE_TABLE[arr[i]]
    }
  }
  return result
}

module.exports = {
    decode
}