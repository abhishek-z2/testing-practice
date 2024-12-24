function capitalize(string) {
    if (string === '') {
      return ''; 
    }
    return string[0].toUpperCase() + string.slice(1); 
  }

function reverseString(string){
    return string.split('').reverse().join('');
}

const calculator = ()=>{
    function add(a,b){
        return a+b;
    }

    function subtract(a,b){
        return a-b;
    }

    function multiply(a,b){
        return a*b;
    }

    function divide(a,b){
        return a/b;
    }
    
    return {add,subtract,multiply,divide}
}

function isUpperCase(letter){
    return letter===letter.toUpperCase()
}

function caesarCipher(string, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
  
    Array.from(string).forEach(letter => {
      const index = alphabet.indexOf(letter.toLowerCase());
      if (index !== -1) { 
        const shiftedIndex = (index + shift) % 26;
        result += (isUpperCase(letter)?alphabet[shiftedIndex].toUpperCase():alphabet[shiftedIndex]);
      } else {
        result += letter; 
      }
    });
    return result;
  }

  function analyzeArray(arr){
    const sum = arr.reduce((sum,current)=>
        sum+current,0);
    const average = sum/arr.length;

    const sortedArray = arr.sort((a,b)=> a-b);
    const [min,max] = [sortedArray[0],sortedArray[sortedArray.length-1]];

    const length = arr.length

    return {average,min,max,length}
  }


module.exports = {analyzeArray,caesarCipher,calculator,capitalize,reverseString};
