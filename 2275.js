/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
    let maxCombination = 0;

    for (let i = 0; i < 24; i++) {
        let count = 0;
        for (const num of candidates) {
            if (num & (1 << i)) { 
                count++;
            }
        }
        maxCombination = Math.max(maxCombination, count);
    }

    return maxCombination;
};
