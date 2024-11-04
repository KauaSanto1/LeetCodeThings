/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let result = "";
    for(let i = 0; i < s.length; i++){
        if (result.length < 2 || !(result[result.length - 1] === s[i] && result[result.length - 2] === s[i])) {
            result += s[i];
        }       
    }
    return result;
};
