/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    let comp = "";
    let i = 0;

    while (i < word.length) {
        let count = 1;
        let char = word[i]; 
        while (i + 1 < word.length && word[i] === word[i + 1] && count < 9) {
            count++;
            i++;
        }
        comp += count + char;
        i++;
    }

    return comp;
};

// Exemplo de uso
const param_1 = "aaaaaaaaaaaaaabb"; // Exemplo de entrada
const ret = compressedString(param_1);
console.log(ret);
