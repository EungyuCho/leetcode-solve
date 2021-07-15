/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (!nums.length) return 0;
    
    let max = 0;
    
    const set = new Set(nums);
    
    for (let a of set) {
        if (set.has(a - 1)) continue;
        
        let num = a;
        let count = 1;
        
        while (set.has(num + 1)) {
            count++;
            num++;
        }
        
        max = Math.max(max, count)
    }
    
    return max;
};